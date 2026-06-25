#!/usr/bin/env node
'use strict';

const fs = require('fs');

const scraped = JSON.parse(fs.readFileSync('./scraped-sqf-commands.json', 'utf8'));
const denylist = new Set(JSON.parse(fs.readFileSync('./command-denylist.json', 'utf8')));

// SQF type name (lowercase) -> TypeScript/JS type string
const TYPE_MAP = {
  'number': 'number',
  'string': 'string',
  'boolean': 'boolean',
  'nothing': 'void',
  'anything': 'any',
  'object': 'GameObject',
  'group': 'Group',
  'side': 'Side',
  'control': 'Control',
  'display': 'Display',
  'namespace': 'Namespace',
  'team member': 'TeamMember',
  'waypoint': 'Waypoint',
  'eden entity': 'EdenEntity',
  'turret path': 'TurretPath',
  'structured text': 'StructuredText',
  'diary record': 'DiaryRecord',
  // Named position types (from sqf-data-types.json)
  'position': 'PositionAGL',     // generic Position defaults to AGL (most common)
  'positionagl': 'PositionAGL',
  'positionasl': 'PositionASL',
  'positionaslw': 'PositionASLW',
  'positionatl': 'PositionATL',
  'positionagls': 'PositionAGLS',
  'positionworld': 'PositionWorld',
  'positionrelative': 'PositionRelative',
  'positionconfig': 'PositionConfig',
  // Vector3D is not a named sqf-data-type, stays as tuple
  'vector3d': '[number, number, number]',
  'code': 'Function',
  'array': 'Array<any>',
  // Note: ConfigFile is only for *configFile commands; all other Config types use Config from sqf-data-types.json
  'config': 'Config',
};

function mapBaseType(t) {
  const lower = t.toLowerCase().trim();
  if (TYPE_MAP[lower]) return TYPE_MAP[lower];
  return 'any';
}

function mapType(typeStr) {
  if (!typeStr || !typeStr.trim()) return 'any';
  let t = typeStr.trim();

  t = t.replace(/\b\d+\.\d+[A-Za-z]*\b\s*/g, '').trim();
  t = t.replace(/\b(LALocal|GEGlobal)\b/g, '').trim();
  t = t.replace(/\s+in\s+range\s+[\d.\-+]+\.\.[\d.\-+]+/i, '').trim();
  t = t.replace(/^[,\s]+|[,\s]+$/g, '').trim();

  if (!t) return 'any';

  const lower = t.toLowerCase();
  if (TYPE_MAP[lower]) return TYPE_MAP[lower];

  // "Array of X" — handle irregular plurals (Entities -> Entity)
  const arrOfMatch = t.match(/^[Aa]rray\s+of\s+(.+?)$/);
  if (arrOfMatch) {
    const inner = arrOfMatch[1].trim();
    const innerLower = inner.toLowerCase();
    const singularIes = innerLower.replace(/ies$/i, 'y');
    const singularS = innerLower.replace(/s$/, '');
    const innerMapped =
      TYPE_MAP[innerLower] ||
      TYPE_MAP[singularIes] ||
      TYPE_MAP[singularS] ||
      mapBaseType(inner);
    return `Array<${innerMapped}>`;
  }

  // "X or Y" union
  if (/\bor\b/i.test(t)) {
    const parts = t.split(/\s+[Oo][Rr]\s+/);
    const mapped = parts.map(p => mapBaseType(p.trim().replace(/\b\d+\.\d+[A-Za-z]*\b\s*/g, '').trim()));
    const unique = [...new Set(mapped)];
    if (unique.length === 1) return unique[0];
    return unique.join(' | ');
  }

  return mapBaseType(t);
}

function isOptional(paramStr) {
  return /\(optional/i.test(paramStr);
}

// Parse a parameter string "name: Type - description" (first line only)
function parseParam(paramStr) {
  if (!paramStr) return null;

  const firstLine = paramStr.split('\n')[0].trim();
  const colonIdx = firstLine.indexOf(':');
  if (colonIdx === -1) return { name: firstLine, type: 'any', optional: false };

  const name = firstLine.slice(0, colonIdx).trim();
  const rest = firstLine.slice(colonIdx + 1).trim();

  const cleanRest = rest.replace(/\b\d+\.\d+[A-Za-z]*\b\s*/g, '').trim();
  const noParens = cleanRest.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();

  const dashIdx = noParens.indexOf(' - ');
  let typeStr, desc;
  if (dashIdx !== -1) {
    typeStr = noParens.slice(0, dashIdx).trim();
    const originalDashIdx = cleanRest.indexOf(' - ');
    desc = originalDashIdx !== -1 ? cleanRest.slice(originalDashIdx + 3).trim() : undefined;
  } else {
    typeStr = noParens.trim();
  }

  const type = mapType(typeStr);
  const optional = isOptional(paramStr);
  const result = { name, type, optional };
  if (desc) result.description = desc;
  return result;
}

// Parse a return value string "Type - description"
// Returns { type?, description? } — type omitted when Nothing/void
function parseReturnValue(retStr) {
  if (!retStr) return {};

  const firstLine = retStr.split('\n')[0].trim();
  const clean = firstLine.replace(/\b\d+\.\d+[A-Za-z]*\b\s*/g, '').trim();

  const dashIdx = clean.indexOf(' - ');
  let typeStr, desc;
  if (dashIdx !== -1) {
    typeStr = clean.slice(0, dashIdx).trim();
    desc = clean.slice(dashIdx + 3).trim();
  } else {
    typeStr = clean.trim();
  }

  const type = mapType(typeStr);
  const result = {};
  if (type !== 'void') result.type = type;
  if (desc) result.description = desc;
  return result;
}

// Manual overrides for commands where auto-parsing isn't sufficient.
// Add a new entry here when a command has complex types, renamed params,
// mixed-type array returns, or optional params that aren't auto-detected.
const OVERRIDES = {
  'actionKeysEx': {
    returnValue: {
      description: 'array of [mainKeyArray, comboKeyArray, isDoubleTap] entries',
      type: [
        { name: 'mainKeyArray',  type: 'Array<any>', description: 'key info: [dikCode, device, deviceId]' },
        { name: 'comboKeyArray', type: 'Array<any>', description: 'combo key info: [dikCode, device, deviceId]; filled only for combination keys' },
        { name: 'isDoubleTap',   type: 'boolean',    description: 'whether the action key is a double-tap' },
      ],
    },
  },

  'activeTitleEffectParams': {
    returnValue: {
      description: 'array with [type, effect, speed, showInMap], or empty array',
      type: [
        { name: 'effectType', type: 'string',  description: 'type of effect: "OBJ", "RSC", or "TXT"' },
        { name: 'effect',     type: 'string',  description: 'Title Effect Type ("PLAIN", "BLACK OUT", etc.)' },
        { name: 'speed',      type: 'number',  description: 'effect speed multiplier' },
        { name: 'showInMap',  type: 'boolean', description: 'true if effect is available over map' },
      ],
    },
  },

  'actionParams': {
    returnValue: {
      description: 'array with [title, script, arguments, priority, showWindow, hideOnUse, shortcut, condition, radius, unconscious, textWindowBackground, textWindowForeground, selection, memoryPoint]',
      type: [
        { name: 'title',               type: 'string',  description: 'action title text' },
        { name: 'script',              type: 'string',  description: 'script file or expression assigned to the action' },
        { name: 'arguments',           type: 'any',     description: 'arguments passed to the action' },
        { name: 'priority',            type: 'number',  description: 'action priority on the action menu' },
        { name: 'showWindow',          type: 'boolean', description: 'whether the action is shown in the center of the screen too' },
        { name: 'hideOnUse',           type: 'boolean', description: 'whether the action menu should close after selecting the action' },
        { name: 'shortcut',            type: 'string',  description: 'action bindings to an existing engine action if any' },
        { name: 'condition',           type: 'string',  description: 'expression returning true or nil for action to appear on the action menu' },
        { name: 'radius',              type: 'number',  description: 'max distance to entity at which action becomes available' },
        { name: 'unconscious',         type: 'boolean', description: 'whether the action is available to unconscious person' },
        { name: 'textWindowBackground',type: 'string' },
        { name: 'textWindowForeground',type: 'string' },
        { name: 'selection',           type: 'string',  description: 'named selection in Geometry LOD to which the action is attached' },
        { name: 'memoryPoint',         type: 'string',  description: 'memory point on the object to which the action is attached' },
      ],
    },
  },

  'addAction': {
    parameters: [
      { name: 'object',          type: 'GameObject',               optional: false, description: 'unit, vehicle or static object; no agents' },
      { name: 'title',           type: 'string',                   optional: false, description: 'action name displayed in the action menu; may contain Structured Text' },
      { name: 'script',          type: 'AddActionScript',           optional: false, description: 'code to execute when the action is activated' },
      { name: 'arguments',       type: 'any',                      optional: true,  description: '(Optional, default nil) arguments to pass to the script, accessible as _this select 3' },
      { name: 'priority',        type: 'number',                   optional: true,  description: '(Optional, default 1.5) priority value; higher number = higher position in menu' },
      { name: 'showWindow',      type: 'boolean',                  optional: true,  description: '(Optional, default true) if true, players see the title text as they approach the object' },
      { name: 'hideOnUse',       type: 'boolean',                  optional: true,  description: '(Optional, default true) if true, closes the action menu after the action is selected' },
      { name: 'shortcut',        type: 'string',                   optional: true,  description: '(Optional, default "") key name from bin.pbo to bind to this action' },
      { name: 'condition',       type: 'string',                   optional: true,  description: '(Optional, default "true") expression that must return true for the action to be shown' },
      { name: 'positionInModel', type: 'string',                   optional: true,  description: '(Optional, default "") named selection in the model for positioning the action in 3D space' },
      { name: 'radius',          type: 'number',                   optional: true,  description: '(Optional, default 50) maximum 3D distance in meters for the action to be available; -1 disables' },
      { name: 'radiusView',      type: 'number',                   optional: true,  description: '(Optional) maximum cursor distance in meters from the 3D action to activate it; -1 disables' },
      { name: 'showIn3D',        type: 'number',                   optional: true,  description: '(Optional) bitmask condition for showing the action in 3D space' },
      { name: 'available',       type: 'number',                   optional: true,  description: '(Optional) bitmask condition for being able to activate the action' },
      { name: 'textDefault',     type: 'string',                   optional: true,  description: '(Optional, default "") Structured Text shown as the 3D action or highlighted in the action menu' },
      { name: 'textToolTip',     type: 'string',                   optional: true,  description: '(Optional, default "") Structured Text faded in under textDefault when hovering in 3D space' },
    ],
  },

  'addPlayerScores': {
    parameters: [
      { name: 'unit',   type: 'GameObject',                              optional: false },
      { name: 'values', type: '[number, number, number, number, number]', optional: false, description: 'score values: [killsInfantry, killsSoft, killsArmor, killsAir, score]' },
    ],
  },

  'addEventHandler': {
    parameters: [
      { name: 'target', type: 'GameObject | Group', optional: false },
      { name: 'type',   type: 'string',             optional: false, description: 'see Event Handlers for the full list of available options' },
      { name: 'code',   type: 'Function | string',  optional: false, description: 'code that should be executed when the Event Handler fires' },
    ],
  },

  'addWaypoint': {
    parameters: [
      { name: 'groupName', type: 'Group',                    optional: false },
      { name: 'center',    type: 'PositionAGL | GameObject', optional: false, description: 'PositionAGL (PositionASL if radius is negative) or Object' },
      { name: 'radius',    type: 'number',                   optional: false, description: 'random waypoint placement within radius from center; -1 for exact placement' },
      { name: 'index',     type: 'number',                   optional: true,  description: '(Optional, default -1) insert at this position; if invalid, appended at end' },
      { name: 'name',      type: 'string',                   optional: true,  description: '(Optional, default "") waypointName' },
    ],
  },

  'addEditorObject': {
    parameters: [
      { name: 'map',                   type: 'Control',    optional: false },
      { name: 'typeNameSubtypeConfig', type: 'Array<any>', optional: false, description: '[type, [name1, value1, ...], subtypeClass]' },
    ],
  },

  'addMenuItem': {
    parameters: [
      { name: 'map',                         type: 'Control',    optional: false },
      { name: 'menuIndexTextCommandPriority', type: 'Array<any>', optional: false, description: '[menu or index, text, command, priority]' },
    ],
  },

  'addMissionEventHandler': {
    parameters: [
      { name: 'event',      type: 'string',           optional: false, description: 'event name' },
      { name: 'expression', type: 'Function | string',optional: false, description: 'expression that will be executed in missionNamespace when event handler fires' },
    ],
  },

  'addMPEventHandler': {
    parameters: [
      { name: 'object',     type: 'GameObject',       optional: false, description: 'object to monitor' },
      { name: 'type',       type: 'string',           optional: false, description: 'event handler name' },
      { name: 'expression', type: 'string | Function',optional: false, description: 'expression to execute' },
    ],
  },

  // renamed "function" (JS reserved word) to "handler"
  'addMusicEventHandler': {
    parameters: [
      { name: 'type',    type: 'string',           optional: false, description: '"MusicStart" or "MusicStop"' },
      { name: 'handler', type: 'string | Function',optional: false, description: 'handler; params array is [musicClassname, eventHandlerId, currentPosition, totalLength]' },
    ],
  },

  'addPublicVariableEventHandler': {
    parameters: [
      { name: 'varName', type: 'string',   optional: false, description: 'missionNamespace variable name' },
      { name: 'code',    type: 'Function', optional: false, description: 'executed in missionNamespace; _this is [varName, value, target]' },
    ],
  },

  'addForce': {
    parameters: [
      { name: 'object',   type: 'GameObject',            optional: false, description: 'PhysX object or unit (must be local; will be set unconscious)' },
      { name: 'force',    type: '[number, number, number]',optional: false, description: 'force vector in world space in newton-seconds' },
      { name: 'position', type: 'PositionRelative',       optional: false, description: 'position relative to object' },
    ],
  },

  'add3DENEventHandler': {
    parameters: [
      { name: 'type', type: 'string',   optional: false, description: 'see Eden Editor Event Handler' },
      { name: 'code', type: 'Function', optional: false, description: 'event handler code; _this = event parameters, _thisEvent = event type, _thisEventHandler = handler index' },
    ],
  },

  // BIS_fnc_getPitchBank returns a fixed [pitch, bank] tuple, not a generic Array<number>
  'BIS_fnc_getPitchBank': {
    returnValue: {
      type: '[number, number]',
      description: 'pitch and bank of the object in degrees, format [pitch, bank]',
    },
  },

  'configFile': {
    returnValue: {
      type: 'ConfigFile',
    },
  },

  // rename "2Dmode" parameter (starts with digit) to "mode2D"
  'nearestObjects': {
    parameters: [
      { name: 'position', type: 'GameObject | PositionAGL', optional: false },
      { name: 'types',    type: 'Array<any>',             optional: false, description: 'array of class names to search for' },
      { name: 'radius',   type: 'number',                 optional: false, description: 'search radius' },
      { name: 'mode2D',   type: 'boolean',                optional: true,  description: '(Optional, default false) if true, search in 2D space only' },
    ],
  },

  'BIS_fnc_dynamicText': {
    parameters: [
      { name: 'text',       type: 'string',              optional: false, description: 'text to display' },
      { name: 'x',          type: 'number | Array<any>', optional: true,  description: '(Optional, default -1) position in x, or array [x, width]' },
      { name: 'y',          type: 'number | Array<any>', optional: true,  description: '(Optional, default -1) position in y, or array [y, height]' },
      { name: 'duration',   type: 'number',              optional: true,  description: '(Optional, default 4) display duration' },
      { name: 'fadeInTime', type: 'number',              optional: true,  description: '(Optional, default 1) fade-in time' },
      { name: 'deltaY',     type: 'number',              optional: true,  description: '(Optional, default 0) Y position delta' },
      { name: 'rscLayer',   type: 'number',              optional: true,  description: '(Optional) resource layer' },
    ],
  },

  'BIS_fnc_crewCount': {
    parameters: [
      { name: 'classname', type: 'string', optional: false, description: 'classname of vehicle' },
      { name: 'includeCargo', type: 'boolean', optional: false, description: 'true if cargo seats should be included' },
    ],
  },

  // rename parameter "class" (JS reserved word) to "className"
  'cutRsc': {
    parameters: [
      { name: 'className', type: 'string', optional: false, description: 'the class name of the resource; "Default" will remove the current resource' },
      { name: 'effect',    type: 'string', optional: false, description: 'one of "PLAIN", "PLAIN DOWN", "BLACK", "BLACK FADED", "BLACK OUT", "BLACK IN", "WHITE OUT", "WHITE IN"' },
      { name: 'speed',     type: 'number', optional: true,  description: '(Optional, default -1) time in seconds to fade in resource' },
      { name: 'showInMap', type: 'boolean', optional: true, description: '(Optional, default true) false to hide the resource when the map is opened' },
      { name: 'drawOverHUD', type: 'boolean', optional: true, description: '(Optional, default true) false to show the resource under in-game HUD' },
    ],
  },

  'setVariable': {
    parameters: [
      { name: 'varspace', type: 'Namespace | GameObject | Group | Control | Display', optional: false, description: 'variable space in which variable can be set' },
      { name: 'name',     type: 'string',                                            optional: false, description: 'variable name (Identifier)' },
      { name: 'value',    type: 'any',                                              optional: false, description: 'variable value' },
      { name: 'public',   type: 'boolean | number | Array<number>',                 optional: true,  description: '(Optional, default false) if true, variable is broadcast globally; if number, set on specific client; if array, set on listed clients' },
    ],
  },

  'remoteExec': {
    parameters: [
      { name: 'params',  type: 'any',         optional: false, description: 'order\'s parameter; Structured Text is not meant to be sent over network' },
      { name: 'order',   type: 'string',      optional: false, description: 'function or command name; only those allowed by CfgRemoteExec will be executed' },
      { name: 'targets', type: 'number | GameObject | string | Side | Group | Array<any>', optional: true, description: '(Optional, default 0) target machines for execution' },
      { name: 'JIP',     type: 'boolean | string | GameObject | Group | any', optional: true, description: '(Optional, default false) JIP (Join In Progress) ID or persistence mode' },
    ],
    returnValue: {
      description: 'return value depends on the JIP parameter',
      type: [
        { name: 'error',    type: 'null', description: 'nil in case of error' },
        { name: 'jipId',    type: 'string', description: 'string with the JIP ID (or "" if JIP is false/empty)' },
      ],
    },
  },

  // spawn.code has no explicit typed I/O -> Function
  // Script Handle return type not yet in sqf-data-types.json -> any
  'spawn': {
    parameters: [
      { name: 'arguments', type: 'Array<any>', optional: false, description: 'arguments passed to the script, available as _this inside the code' },
      { name: 'code',      type: 'Function',   optional: false },
    ],
    returnValue: {
      type: 'any',
      description: 'Script Handle — can be used with scriptDone to check when the spawned script has finished',
    },
  },
};

// Transform all non-denylisted commands
const transformed = scraped
  .filter(cmd => !denylist.has(cmd.name))
  .map(cmd => {
    const override = OVERRIDES[cmd.name] || {};

    const parameters = override.parameters
      ? override.parameters
      : (cmd.parameters || []).map(p => parseParam(p)).filter(Boolean);

    const returnValue = override.returnValue
      ? override.returnValue
      : parseReturnValue(cmd.returnValue);

    const description = cmd.description && !cmd.description.includes('Description needed')
      ? cmd.description
      : undefined;

    const result = { name: cmd.name, url: cmd.url, syntax: cmd.syntax };
    if (description) result.description = description;
    result.parameters = parameters;
    result.returnValue = returnValue;

    return result;
  });

fs.writeFileSync('./enhanced-sqf-commands.json', JSON.stringify(transformed, null, 2), 'utf8');
console.log(`Transformed ${transformed.length} commands -> enhanced-sqf-commands.json`);
