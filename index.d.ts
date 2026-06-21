export interface MissionDefinition {
	init?: () => void
	initServer?: () => void
	initPlayerLocal?: (player: GameObject, didJIP: boolean) => void
}

export function defineMission(def: MissionDefinition): MissionDefinition {
	return def
}

/**
 * Object refers to a building block within a scenario. In general when using this
 * term the author refers to the representation of an object (soldier, house,
 * crate, etc.) that can be manipulated when in the 3D environment via the
 * scripting language. As there is a special representation that is used in the
 * mission editor, one might distinguish between a 'game object' (this article) and
 * an 'editor object' (see Editor Object).
 * @see {@link https://community.bistudio.com/wiki/Object}
 */
declare class GameObject {}

/**
 * A group is its own data type in the scripting language. All units belong to a
 * group. If units are linked together in the editor, they are all part of the same
 * group. If a unit is not linked to anyone else, then it belongs to its own group.
 * @see {@link https://community.bistudio.com/wiki/Group}
 */
declare class Group {}

/**
 * A Turret Path is an Array of Numbers that determines a turret seat's "path", a
 * turret being able to have a turret that has a turret etc.
 * @see {@link https://community.bistudio.com/wiki/Turret_Path}
 */
declare class TurretPath {}

/**
 * A team
 * @see {@link https://community.bistudio.com/wiki/Team}
 */
declare class Team {}

/**
 * A member of a `Team`.
 * @see {@link https://community.bistudio.com/wiki/Team_Member}
 */
declare class TeamMember {}

/**
 * Control UI object.
 * @see {@link https://community.bistudio.com/wiki/Control}
 */
declare class Control {}

/**
 * A Diary Record is created by createDiaryRecord.
 * @see {@link https://community.bistudio.com/wiki/Diary_Record}
 */
declare class DiaryRecord {}

/**
 * Data type representing a side.
 * @see {@link https://community.bistudio.com/wiki/Side}
 */
declare class Side {}

/**
 * Display is a UI object that holds Dialogs and Controls. Similar to how controls
 * are identified by IDCs, displays and dialogs are identified by IDDs. If the IDD
 * is available, displays (and dialogs) can be accessed with findDisplay. The
 * existence of a distinction between displays and dialogs becomes apparent at time
 * of creation and closing. A display uses the functions createDisplay and
 * closeDisplay, whereas a dialog uses createDialog and closeDialog.
 * @see {@link https://community.bistudio.com/wiki/Display}
 */
declare class Display {}

/**
 * A Namespace is a container for Variables. Any global variable is always part of
 * exactly one namespace - another namespace may contain a variable with the same
 * Identifier, but they remain two distinct independent variables. Scripts and
 * functions are always executed in the context of some namespace.
 * @see {@link https://community.bistudio.com/wiki/Namespace}
 */
declare class Namespace {}

/**
 * Group is of type Group, index is of type Number.
 * @see {@link https://community.bistudio.com/wiki/Waypoint}
 */
export type Waypoint = [Group, number]

/**
 * Structured Text is a Data Type that has been introduced with Armed Assault. It
 * is a rich text, which is able to include images and formatting. It can be
 * created using XML-like syntax, as seen below. However, using XML-like syntax
 * alone is not going to turn a normal string into structured text, it should be
 * converted to TEXT first.
 * @see {@link https://community.bistudio.com/wiki/Structured_Text}
 */
declare class StructuredText {}

/**
 * Eden Entity is an entity which can be created, edited or deleted in the Eden
 * Editor.
 * @see {@link https://community.bistudio.com/wiki/Eden_Entity}
 */
declare class EdenEntity {}

/**
 * 2D position.
 * @see {@link https://community.bistudio.com/wiki/Position#Position2D}
 */
export type Postition2D = [number, number]

/**
 * "Above Sea Level" 3D position. Z is measured from the sea level which is
 * constant across the map.
 * @see {@link https://community.bistudio.com/wiki/Position#PositionASL}
 */
export type PositionASL = [number, number, number]

/**
 * "Above Sea Level including Waves" 3D position. Z is measured from the surface of
 * water at that position. Both waves and pond objects affect the result.
 * @see {@link https://community.bistudio.com/wiki/Position#PositionASLW}
 */
export type PositionASLW = [number, number, number]

/**
 * "Above Terrain Level" 3D position. Z is measured from the terrain level which
 * varies across the map.
 * @see {@link https://community.bistudio.com/wiki/Position#PositionATL}
 */
export type PositionATL = [number, number, number]

/**
 * "Above Ground Level" 3D position. Z is the same as in PositionASLW when over sea
 * and is the same as in PositionATL when over land. Most commands either take or
 * return PositionAGL.
 * @see {@link https://community.bistudio.com/wiki/Position#PositionAGL}
 */
export type PositionAGL = [number, number, number]

/**
 * "Above Ground Level including Surfaces" 3D position. Over land, Z is measured as
 * height over terrain level minus the height of surface over terrain level
 * underneath. If such surface exists and is counted in, the resulting Z becomes 0.
 * @see {@link https://community.bistudio.com/wiki/Position#PositionAGLS}
 */
export type PositionAGLS = [number, number, number]

/**
 * Similar to PositionASL, however Z is measured from the sea level to the the
 * model centre [0, 0, 0] of the object, rather than transformed boundingCenter or
 * land contact vertices.
 * @see {@link https://community.bistudio.com/wiki/Position#PositionWorld}
 */
export type PositionWorld = [number, number, number]

/**
 * Relative position is normally an [X, Y, Z] offset from the model centre.
 * @see {@link https://community.bistudio.com/wiki/Position#PositionRelative}
 */
export type PositionRelative = [number, number, number]

/**
 * The format used in configs, such as mission.sqm, is [X, Z, Y], where Z and Y are
 * swapped around. One other command that uses this format is
 * positionCameraToWorld. Z in configs is measured from the sea level.
 * @see {@link https://community.bistudio.com/wiki/Position#PositionConfig}
 */
export type PositionConfig = [number, number, number]

/**
 * Function that can be provided as the script for addAction.
 * @see {@link https://community.bistudio.com/wiki/addAction}
 */
export type AddActionScript = (target: GameObject, caller: GameObject, actionId: string, argumentList: any) => void

export namespace bis {
	export function crewCount(className: string, includeCargoSeats: boolean): number
}

export namespace diag {
	export function log(output: any): void
}

/**
 * Returns absolute (positive) value of a real number.
 *
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/abs}
 * @sqfsyntaxtype unary
 */
export function abs(x: number): number

/**
 * Returns the current simulation acceleration factor.
 *
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/accTime}
 * @sqfsyntaxtype nullary
 */
export function accTime(): number

/**
 * ArcCosine of a number, result in Degrees
 *
 * @param x - any other value returns NaN
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/acos}
 * @sqfsyntaxtype unary
 */
export function acos(x: number): number

/**
 * Make a unit perform an action. See Category:Actions for action names and
 * syntaxes. Since Arma 3 2.18 it is possible to use actionNow to perform some
 * actions immediately without any animation. However, note that some actions do
 * require animations (for example, opening inventory while on foot), otherwise
 * they will get cancelled. ⓘ
 * • in singleplayer, when user Alt-Tabs the simulation is paused and so the action
 * will also halt until user returns to the game. For example, player action
 * ["GetInDriver", car]; executed while user is Alt-Tabbed will result in the user
 * seeing the action happening when he returns to the game screen. This does not
 * happen in Multiplayer.
 * • the alternative syntax creates a temporary Logic entity in place of unit.
 *
 * @see {@link https://community.bistudio.com/wiki/action}
 * @sqfsyntaxtype binary
 */
export function action(unit: GameObject, actionArray: Array<any>): void

/**
 * Represents the SQF `actionIDs` command.
 *
 * @param entity - entity with added user actions
 * @returns IDs of all user actions added to given entity with addAction command
 * @see {@link https://community.bistudio.com/wiki/actionIDs}
 * @sqfsyntaxtype unary
 */
export function actionIDs(entity: GameObject): Array<number>

/**
 * Returns Array containing dikCodes of keys, buttons and combos assigned to the
 * given user action. Action names could be found in config class ControllerSchemes
 * or user action names or user profile, for example: keyWatch[] = { 24 }; To
 * retrieve the value, use the property name without 'key': actionKeys "Watch"; //
 * 24 In addition, some of the actions are also listed in here: inputAction/actions
 *
 * @returns Array<number>
 * @see {@link https://community.bistudio.com/wiki/actionKeys}
 * @sqfsyntaxtype unary
 */
export function actionKeys(userAction: string): Array<number>

/**
 * Gives a broken down version of actionKeys return. Returns an Array containing
 * the breakdowns of the dikCodes of keys, buttons and combos assigned to the given
 * user action. Action names can be found in config class ControllerSchemes or user
 * action names or user profile (see Example 1). In addition, some of the actions
 * are also listed here: inputAction/actions The Key Device can be one of several
 * types:
 * • "KEYBOARD"
 * • "MOUSE_BUTTON"
 * • "MOUSE_AXIS"
 * • "JOYSTICK_BUTTON"
 * • "JOYSTICK_AXIS"
 * • "JOYSTICK_POV"
 * • "XINPUT" - (Xbox) Controller Input
 * • "TRACKER" - Motion Tracking (TrackIR, Tobii etc)
 *
 * @param userAction - user action name (see inputAction/actions)
 * @returns array of [mainKeyArray, comboKeyArray, isDoubleTap] entries *  - mainKeyArray - key info: [dikCode, device, deviceId]
 *  - comboKeyArray - combo key info: [dikCode, device, deviceId]; filled only for combination keys
 *  - isDoubleTap - whether the action key is a double-tap
 * @see {@link https://community.bistudio.com/wiki/actionKeysEx}
 * @sqfsyntaxtype unary
 */
export function actionKeysEx(userAction: string): [mainKeyArray: Array<any>, comboKeyArray: Array<any>, isDoubleTap: boolean]

/**
 * Returns a list of button images or names assigned to the given user action. A
 * maximum of maxKeys keys is listed. You can find the action names in the
 * ControllerSchemes config class or user action names.
 *
 * @returns StructuredText
 * @see {@link https://community.bistudio.com/wiki/actionKeysImages}
 * @sqfsyntaxtype unary
 */
export function actionKeysImages(userAction: string): StructuredText

/**
 * Returns a list of button names assigned to the given user action. Action names
 * can be found in config class ControllerSchemes or user action names.
 *
 * @returns string
 * @see {@link https://community.bistudio.com/wiki/actionKeysNames}
 * @sqfsyntaxtype unary
 */
export function actionKeysNames(userAction: string): string

/**
 * Returns a list of button names assigned to the given user action. You can find
 * the action names in config class ControllerSchemes or user action names.
 *
 * @param userAction - name of the action
 * @returns Array<string>
 * @see {@link https://community.bistudio.com/wiki/actionKeysNamesArray}
 * @sqfsyntaxtype unary
 */
export function actionKeysNamesArray(userAction: string): Array<string>

/**
 * Returns localized name of action.
 *
 * @returns string
 * @see {@link https://community.bistudio.com/wiki/actionName}
 * @sqfsyntaxtype unary
 */
export function actionName(action: string): string

/**
 * Make a unit perform an action immediately (without any
 * animation/pre-processing). See the action command for more information.
 *
 * @see {@link https://community.bistudio.com/wiki/actionNow}
 * @sqfsyntaxtype binary
 */
export function actionNow(unit: GameObject, actionArray: Array<any>): void

/**
 * Returns Array with params for given user action id (similar to addAction param
 * array).
 *
 * @param entity - entity with added user actions
 * @param id - id of existing user action (returned by addAction or actionIDs)
 * @returns array with [title, script, arguments, priority, showWindow, hideOnUse, shortcut, condition, radius, unconscious, textWindowBackground, textWindowForeground, selection, memoryPoint] *  - title - action title text
 *  - script - script file or expression assigned to the action
 *  - arguments - arguments passed to the action
 *  - priority - action priority on the action menu
 *  - showWindow - whether the action is shown in the center of the screen too
 *  - hideOnUse - whether the action menu should close after selecting the action
 *  - shortcut - action bindings to an existing engine action if any
 *  - condition - expression returning true or nil for action to appear on the action menu
 *  - radius - max distance to entity at which action becomes available
 *  - unconscious - whether the action is available to unconscious person
 *  - textWindowBackground - string
 *  - textWindowForeground - string
 *  - selection - named selection in Geometry LOD to which the action is attached
 *  - memoryPoint - memory point on the object to which the action is attached
 * @see {@link https://community.bistudio.com/wiki/actionParams}
 * @sqfsyntaxtype binary
 */
export function actionParams(entity: GameObject, id: number): [title: string, script: string, arguments: any, priority: number, showWindow: boolean, hideOnUse: boolean, shortcut: string, condition: string, radius: number, unconscious: boolean, textWindowBackground: string, textWindowForeground: string, selection: string, memoryPoint: string]

/**
 * Activates the listed addons.
 *
 * @see {@link https://community.bistudio.com/wiki/activateAddons}
 * @sqfsyntaxtype unary
 */
export function activateAddons(addonsList: Array<string>): void

/**
 * Returns a list of all activated addons.
 *
 * @returns Array<string>
 * @see {@link https://community.bistudio.com/wiki/activatedAddons}
 * @sqfsyntaxtype nullary
 */
export function activatedAddons(): Array<string>

/**
 * Activates the given keyname for the current user profile. The keys are used to
 * unlock missions or campaigns. See keys, keysLimit and doneKeys in the
 * Description.ext#Mission Keys chapter.
 *
 * @see {@link https://community.bistudio.com/wiki/activateKey}
 * @sqfsyntaxtype unary
 */
export function activateKey(keyname: string): void

/**
 * Returns type, effect, speed and map visibility of the given active title effect
 * (see allActiveTitleEffects)
 *
 * @param layer - layer number or -1 (see allActiveTitleEffects)
 * @returns array with [type, effect, speed, showInMap], or empty array *  - effectType - type of effect: "OBJ", "RSC", or "TXT"
 *  - effect - Title Effect Type ("PLAIN", "BLACK OUT", etc.)
 *  - speed - effect speed multiplier
 *  - showInMap - true if effect is available over map
 * @see {@link https://community.bistudio.com/wiki/activeTitleEffectParams}
 * @sqfsyntaxtype unary
 */
export function activeTitleEffectParams(layer: number): [effectType: string, effect: string, speed: number, showInMap: boolean]

/**
 * Connect entities together. Be aware to select the correct type of Eden Entities
 * for the connection type.
 *
 * @param type - connection class from "Cfg3DEN" >> "Connections":
 * @param from - entities which are being connected
 * @param to - entity to which entities will be connected to
 * @returns true If the connection was made
 * @see {@link https://community.bistudio.com/wiki/add3DENConnection}
 * @sqfsyntaxtype unary
 */
export function add3DENConnection(type: string, from: Array<EdenEntity>, to: EdenEntity): boolean

/**
 * Adds an Eden Editor Event Handler.
 *
 * @param type - see Eden Editor Event Handler
 * @param code - event handler code; _this = event parameters, _thisEvent = event type,
 * _thisEventHandler = handler index
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/add3DENEventHandler}
 * @sqfsyntaxtype unary
 */
export function add3DENEventHandler(type: string, code: Function): number

/**
 * Adds an editing layer in Eden Editor.
 *
 * @param parentLayerID - ID of the parent layer. No layer will be created when the ID does not point to a
 * layer. Use -1 to create the layer to root.
 * @param name - layer display name
 * @returns layer ID
 * @see {@link https://community.bistudio.com/wiki/add3DENLayer}
 * @sqfsyntaxtype binary
 */
export function add3DENLayer(parentLayerID: number, name: string): number

/**
 * Adds an entry to the action menu of an object. The action can only be activated
 * when in proximity to the object and looking at it. Adding an action to the
 * player makes that action available to the player at all times. For event
 * handling of user interaction see inGameUISetEventHandler.
 *
 * @param object - unit, vehicle or static object; no agents
 * @param title - action name displayed in the action menu; may contain Structured Text
 * @param script - code to execute when the action is activated
 * @param arguments - (Optional, default nil) arguments to pass to the script, accessible as _this
 * select 3
 * @param priority - (Optional, default 1.5) priority value; higher number = higher position in menu
 * @param showWindow - (Optional, default true) if true, players see the title text as they approach
 * the object
 * @param hideOnUse - (Optional, default true) if true, closes the action menu after the action is
 * selected
 * @param shortcut - (Optional, default "") key name from bin.pbo to bind to this action
 * @param condition - (Optional, default "true") expression that must return true for the action to be
 * shown
 * @param positionInModel - (Optional, default "") named selection in the model for positioning the action
 * in 3D space
 * @param radius - (Optional, default 50) maximum 3D distance in meters for the action to be
 * available; -1 disables
 * @param radiusView - (Optional) maximum cursor distance in meters from the 3D action to activate it;
 * -1 disables
 * @param showIn3D - (Optional) bitmask condition for showing the action in 3D space
 * @param available - (Optional) bitmask condition for being able to activate the action
 * @param textDefault - (Optional, default "") Structured Text shown as the 3D action or highlighted in
 * the action menu
 * @param textToolTip - (Optional, default "") Structured Text faded in under textDefault when hovering
 * in 3D space
 * @returns the added action's ID. Action can be removed with removeAction (see also removeAllActions). IDs are incrementing, the first given action to each unit has the ID 0, the second the ID 1, etc. IDs are also passed to the called script (see the script parameter)
 * @see {@link https://community.bistudio.com/wiki/addAction}
 * @sqfsyntaxtype binary
 */
export function addAction(object: GameObject, title: string, script: AddActionScript, arguments?: any, priority?: number, showWindow?: boolean, hideOnUse?: boolean, shortcut?: string, condition?: string, positionInModel?: string, radius?: number, radiusView?: number, showIn3D?: number, available?: number, textDefault?: string, textToolTip?: string): number

/**
 * Adds a backpack for a unit. If a unit already has a backpack, the old backpack
 * will be placed on the ground under the unit. Items defined in the backpack's
 * config will be added as well. ⓘClassname list of available backpacks:
 * • Arma 2 OA backpacks
 * • Arma 3 backpacks - objects starting with "B_", starts with "B_AssaultPack_khk"
 *
 * @see {@link https://community.bistudio.com/wiki/addBackpack}
 * @sqfsyntaxtype binary
 */
export function addBackpack(unit: GameObject, backpackClassName: string): void

/**
 * Add backpack(s) to the cargo space of vehicle. Classname list of available
 * backpacks is here. For a list of possible backpacks, see:
 * • 1.50 Arma 2: Operation Arrowhead: Backpacks
 * • 1.00 Arma 3: CfgVehicles Equipment (starting with B_) In Arma 3, arguments for
 * this command are local LALocal. For the global variant, see
 * addBackpackCargoGlobal.
 *
 * @param vehicle - vehicle to add the backpack to
 * @param backpackClassName - backpack classname
 * @param count - number of backpacks to add. negative count will remove backpacks.
 * @see {@link https://community.bistudio.com/wiki/addBackpackCargo}
 * @sqfsyntaxtype binary
 */
export function addBackpackCargo(vehicle: GameObject, backpackClassName: string, count: number): void

/**
 * Add backpack(s) to the cargo space of vehicle. ⓘClassname list of available
 * backpacks:
 * • Arma 2:OA backpacks
 * • Arma 3 backpacks - objects starting with "B_", starts near "B_AssaultPack_khk"
 *
 * @param vehicle - object to add the Backpack to
 * @param packClassName - see the topic Category:Weapons for reference about possible values.
 * @param count - number of backpacks to add; a negative value will remove backpacks.
 * @see {@link https://community.bistudio.com/wiki/addBackpackCargoGlobal}
 * @sqfsyntaxtype binary
 */
export function addBackpackCargoGlobal(vehicle: GameObject, packClassName: string, count: number): void

/**
 * Adds a backpack to a unit - global variant of addBackpack. ⚠The backpack added
 * with this command will be created on the PC local to the unit you are adding it
 * to, even if executed on the server. Because of this, if non-local unit is the
 * target and one tries to immediately access added backpack, the backpack returned
 * will be null. When adding backpack dynamically to a remote unit, wait until the
 * backpack is added (See Example 2).
 *
 * @param unit - soldier
 * @param backpack - backpack class name
 * @see {@link https://community.bistudio.com/wiki/addBackpackGlobal}
 * @sqfsyntaxtype binary
 */
export function addBackpackGlobal(unit: GameObject, backpack: string): void

/**
 * Adds weapon item, including magazine, directly to the binocular weapon. This is
 * used for infantry weapons.
 *
 * @see {@link https://community.bistudio.com/wiki/addBinocularItem}
 * @sqfsyntaxtype binary
 */
export function addBinocularItem(unit: GameObject, item: string): void

/**
 * Creates the camera shaking effect, like when you are near an explosion
 *
 * @param power - strength of shake (camera movement), practical range is 0 to 20
 * @param duration - duration in seconds divided by 2
 * @param frequency - frequency of shake, practical range is 0 to 100
 * @see {@link https://community.bistudio.com/wiki/addCamShake}
 * @sqfsyntaxtype unary
 */
export function addCamShake(power: number, duration: number, frequency: number): void

/**
 * Allow curator use of given addon.
 *
 * @param curatorObj - curator module.
 * @param addons - CfgPatches class names
 * @see {@link https://community.bistudio.com/wiki/addCuratorAddons}
 * @sqfsyntaxtype binary
 */
export function addCuratorAddons(curatorObj: GameObject, addons: Array<string>): void

/**
 * Adds or changes curator camera area (depends on if ID is already used).
 *
 * @param curatorObj - curator module.
 * @see {@link https://community.bistudio.com/wiki/addCuratorCameraArea}
 * @sqfsyntaxtype binary
 */
export function addCuratorCameraArea(curatorObj: GameObject, cameraAreaID: number, position: PositionAGL, radius: number): void

/**
 * Register objects which can be edited by a curator.
 *
 * @param curatorObj - curator module
 * @see {@link https://community.bistudio.com/wiki/addCuratorEditableObjects}
 * @sqfsyntaxtype binary
 */
export function addCuratorEditableObjects(curatorObj: GameObject, objects: Array<GameObject>, addCrew: boolean): void

/**
 * Adds or changes curator edit area (depends on if ID is already used).
 *
 * @param curatorObj - curator module.
 * @see {@link https://community.bistudio.com/wiki/addCuratorEditingArea}
 * @sqfsyntaxtype binary
 */
export function addCuratorEditingArea(curatorObj: GameObject, editAreaID: number, position: PositionAGL, radius: number): void

/**
 * Adds or removes curator points.
 *
 * @param curatorObj - curator module.
 * @see {@link https://community.bistudio.com/wiki/addCuratorPoints}
 * @sqfsyntaxtype binary
 */
export function addCuratorPoints(curatorObj: GameObject, points: number): void

/**
 * Add items to the selected curator items.
 *
 * @param items - items to add; items can be an Object, Group, Waypoint, or String (marker)
 * @see {@link https://community.bistudio.com/wiki/addCuratorSelected}
 * @sqfsyntaxtype unary
 */
export function addCuratorSelected(items: Array<any>): void

/**
 * Add an object to the editor and assign arguments. Create script is,called with
 * _new equal to true. Returns the ID of the new EditorObject.,Subtype class is
 * optional. ⓘSome Old Editor Command
 *
 * @param typeNameSubtypeConfig - [type, [name1, value1, ...], subtypeClass]
 * @returns string
 * @see {@link https://community.bistudio.com/wiki/addEditorObject}
 * @sqfsyntaxtype binary
 */
export function addEditorObject(map: Control, typeNameSubtypeConfig: Array<any>): string

/**
 * Adds an Event Handler to the given object.
 * • As many Event Handlers of any type can be added - existing Event Handlers do
 * not get overwritten
 * • Use removeEventHandler to remove an Event Handler Read Event Handlers for more
 * information and a list of all available Event Handlers.
 *
 * @param type - see Event Handlers for the full list of available options
 * @param code - code that should be executed when the Event Handler fires
 * @returns the index of the added Event Handler. Indices start at 0 for each unit and increment with each added Event Handler.
 * @see {@link https://community.bistudio.com/wiki/addEventHandler}
 * @sqfsyntaxtype binary
 */
export function addEventHandler(target: GameObject | Group, type: string, code: Function | string): number

/**
 * Applies given force for one frame (essentially an impulse) to unit or given
 * PhysX object at given position. ⓘFor more information see NVIDIA docs.
 *
 * @param object - PhysX object or unit (must be local; will be set unconscious)
 * @param force - force vector in world space in newton-seconds
 * @param position - position relative to object
 * @see {@link https://community.bistudio.com/wiki/addForce}
 * @sqfsyntaxtype binary
 */
export function addForce(object: GameObject, force: [number, number, number], position: PositionRelative): void

/**
 * Adds force generator to world. For this command to have any effect, the Advanced
 * Flight Model (AFM) has to be enabled. AFM status can be checked with
 * difficultyEnabledRTD.
 *
 * @returns force index
 * @see {@link https://community.bistudio.com/wiki/addForceGeneratorRTD}
 * @sqfsyntaxtype unary
 */
export function addForceGeneratorRTD(parameters: Array<any>): number

/**
 * Create a new item and try to link it into goggles (glasses) slot. ⓘThis command
 * does not add NVGs, which are hmd slot items (see linkItem instead).
 *
 * @see {@link https://community.bistudio.com/wiki/addGoggles}
 * @sqfsyntaxtype binary
 */
export function addGoggles(unit: GameObject, type: string): void

/**
 * Adds icon to a group leader. Returns icon ID, Control icons visibility with
 * setGroupIconsVisible. Since Arma 3 v2.22 the offset can be set separately for 2d
 * and 3d.
 *
 * @param group - group to which add the icon
 * @param iconClass - class name of an icon from CfgGroupIcons
 * @param offset - (Optional, default [0,0]) X and Y offsets of the icon in format [offsetX,
 * offsetY, (offsetX3d), (offsetY3d)]
 * @returns icon ID
 * @see {@link https://community.bistudio.com/wiki/addGroupIcon}
 * @sqfsyntaxtype binary
 */
export function addGroupIcon(group: Group, iconClass: string, offset?: Array<number>): number

/**
 * Adds weapon item, including magazine, directly to the handgunWeapon. This is
 * used for infantry weapons.
 *
 * @see {@link https://community.bistudio.com/wiki/addHandgunItem}
 * @sqfsyntaxtype binary
 */
export function addHandgunItem(unit: GameObject, item: string): void

/**
 * Creates a headgear item and tries to link it to headgear slot. If slot is
 * occupied with another item, the item in the slot will be replaced.
 *
 * @see {@link https://community.bistudio.com/wiki/addHeadgear}
 * @sqfsyntaxtype binary
 */
export function addHeadgear(unit: GameObject, item: string): void

/**
 * Creates new item and tries to add it into inventory. Inventory must have enough
 * space to accomodate new item or command will fail.The item can also be a weapon
 * or a magazine.
 *
 * @see {@link https://community.bistudio.com/wiki/addItem}
 * @sqfsyntaxtype binary
 */
export function addItem(unit: GameObject, item: string): void

/**
 * Creates new items and stores them in given container. Works with items, weapons,
 * magazines, equipment and glasses but not backpacks. In the latter case use
 * addBackpackCargo instead. For the global variant, see addItemCargoGlobal.
 *
 * @param count - number of items to add; a negative value removes items
 * @see {@link https://community.bistudio.com/wiki/addItemCargo}
 * @sqfsyntaxtype binary
 */
export function addItemCargo(box: GameObject, item: string, count: number): void

/**
 * Global variant of addItemCargo.
 *
 * @param count - number of items to add. negative count will remove items.
 * @see {@link https://community.bistudio.com/wiki/addItemCargoGlobal}
 * @sqfsyntaxtype binary
 */
export function addItemCargoGlobal(box: GameObject, item: string, count: number): void

/**
 * Adds count items of type name into the weapon pool (used in the campaign to
 * transfer items to the next mission)
 *
 * @param itemName - item name
 * @param count - number of items to add
 * @see {@link https://community.bistudio.com/wiki/addItemPool}
 * @sqfsyntaxtype unary
 */
export function addItemPool(itemName: string, count: number): void

/**
 * Create new item and store it to soldier's backpack. The item can also be a
 * weapon or a magazine.
 *
 * @see {@link https://community.bistudio.com/wiki/addItemToBackpack}
 * @sqfsyntaxtype binary
 */
export function addItemToBackpack(unit: GameObject, item: string): void

/**
 * Create new item and store it to soldier's uniform. The item can also be a weapon
 * or a magazine.
 *
 * @see {@link https://community.bistudio.com/wiki/addItemToUniform}
 * @sqfsyntaxtype binary
 */
export function addItemToUniform(unit: GameObject, item: string): void

/**
 * Create new item and store it to soldier's vest. The item can also be a weapon or
 * a magazine.
 *
 * @see {@link https://community.bistudio.com/wiki/addItemToVest}
 * @sqfsyntaxtype binary
 */
export function addItemToVest(unit: GameObject, item: string): void

/**
 * Adds score to the Xbox Live Statistics score for the given unit (or the
 * commander unit of the given vehicle).
 *
 * @see {@link https://community.bistudio.com/wiki/addLiveStats}
 * @sqfsyntaxtype binary
 */
export function addLiveStats(unit: GameObject, score: number): void

/**
 * Adds a magazine to a person. Infantry units can only carry a specific number of
 * magazines, once the magazine slots are filled (or uniform/vest/bagpack are full
 * in Arma 3), any further addMagazine commands are ignored. If class of magazine
 * does not exist, an error message is printed in .rpt: player addMagazine
 * "dasdsa"; // .rpt: Given magazine[dasdsa] not found ⓘUse addMagazine before
 * addWeapon for the weapon to be loaded with the magazine automatically.
 *
 * @param unitName - person to add the magazines to
 * @param magazineName - magazine name. See the topic Category:Weapons for reference about possible
 * values.
 * @see {@link https://community.bistudio.com/wiki/addMagazine}
 * @sqfsyntaxtype binary
 */
export function addMagazine(unitName: GameObject, magazineName: string): void

/**
 * Adds magazines with specified ammo count to the cargo space of a vehicle or a
 * container.
 *
 * @param cargospace - vehicle or container or weaponholder
 * @param magazine - magazine class name
 * @param quantity - number of magazines to add. a negative value remove magazines
 * @param ammocount - ammo count in each magazine
 * @see {@link https://community.bistudio.com/wiki/addMagazineAmmoCargo}
 * @sqfsyntaxtype binary
 */
export function addMagazineAmmoCargo(cargospace: GameObject, magazine: string, quantity: number, ammocount: number): void

/**
 * Add magazines to the cargo space of vehicles, which can be taken out by infantry
 * units. Once the magazine cargo space is filled up, any further addMagazineCargo
 * commands are ignored. In Arma 3, arguments for this command must be local
 * (LALocal). For the global variant see addMagazineCargoGlobal.
 *
 * @param vehicleName - vehicle to add the magazines to
 * @param magazineName - magazine name. See Category:Weapons for reference about possible values.
 * @param count - number of magazines to add. negative count will remove magazines.
 * @see {@link https://community.bistudio.com/wiki/addMagazineCargo}
 * @sqfsyntaxtype binary
 */
export function addMagazineCargo(vehicleName: GameObject, magazineName: string, count: number): void

/**
 * Add magazines to the cargo space of vehicles, which can be taken out by infantry
 * units. MP Synchronized
 *
 * @param vehicleName - vehicle to add the magazines to
 * @param magazineName - magazine name. See Category:Weapons for reference about possible values.
 * @param count - number of magazines to add. negative count will remove magazines.
 * @see {@link https://community.bistudio.com/wiki/addMagazineCargoGlobal}
 * @sqfsyntaxtype binary
 */
export function addMagazineCargoGlobal(vehicleName: GameObject, magazineName: string, count: number): void

/**
 * Adds magazine to a unit regardless of locality. This command can also be used to
 * add magazine to a vehicle, like a static gun, for example.
 *
 * @see {@link https://community.bistudio.com/wiki/addMagazineGlobal}
 * @sqfsyntaxtype binary
 */
export function addMagazineGlobal(unit: GameObject, magazineName: string): void

/**
 * Adds magazines to the magazine pool, of which the player may choose in the
 * following mission. Available in campaigns only.
 *
 * @param magazineName - magazine class name. See the topic Category:Weapons for reference about possible
 * values.
 * @param count - number of magazines to add
 * @see {@link https://community.bistudio.com/wiki/addMagazinePool}
 * @sqfsyntaxtype unary
 */
export function addMagazinePool(magazineName: string, count: number): void

/**
 * Adds multiple magazines to the unit. For cargo containers use
 * addMagazineCargoGlobal command. ⓘThis command is meant to be used on human
 * units. If used on vehicles, this command is LALocal GEGlobal.
 *
 * @param unit - a soldier
 * @param count - number of magazines
 * @see {@link https://community.bistudio.com/wiki/addMagazines}
 * @sqfsyntaxtype binary
 */
export function addMagazines(unit: GameObject, magazineName: string, count: number): void

/**
 * Adds given number of a magazine to the given turret. Use turret path [-1] for
 * driver's turret.
 *
 * @param quantity - desired number of the magazines
 * @see {@link https://community.bistudio.com/wiki/addMagazinesTurret}
 * @sqfsyntaxtype binary
 */
export function addMagazinesTurret(vehicle: GameObject, magazineName: string, turretPath: TurretPath, quantity: number): void

/**
 * Adds a magazine to the turret. Use turret path [-1] for driver's turret.
 * ⚠Invalid combinations may be created by using this command, for example by
 * adding 20 grenades. In these cases, behaviour is undefined.
 *
 * @param ammoCount - (Optional, default 0) desired ammo count
 * @see {@link https://community.bistudio.com/wiki/addMagazineTurret}
 * @sqfsyntaxtype binary
 */
export function addMagazineTurret(vehicle: GameObject, magazineName: string, turretPath: TurretPath, ammoCount?: number): void

/**
 * Adds a new menu button. Priority is optional. ⓘSome Old Editor Command
 *
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/addMenu}
 * @sqfsyntaxtype binary
 */
export function addMenu(map: Control, text: string, priority: number): number

/**
 * Creates a new menu item. Menu can be "file" or "view",index is index,as returned
 * from addMenu command. priority is optional and determines,where in the menu the
 * item will reside (higher priority items first). ⓘSome Old Editor Command
 *
 * @param menuIndexTextCommandPriority - [menu or index, text, command, priority]
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/addMenuItem}
 * @sqfsyntaxtype binary
 */
export function addMenuItem(map: Control, menuIndexTextCommandPriority: Array<any>): number

/**
 * Adds event handler attached to the current mission and returns event handler
 * handle. For the list of available mission event handlers see: Arma 3: Mission
 * Event Handlers
 *
 * @param event - event name
 * @param expression - expression that will be executed in missionNamespace when event handler fires
 * @returns the index of the currently added mission event handler is returned
 * @see {@link https://community.bistudio.com/wiki/addMissionEventHandler}
 * @sqfsyntaxtype unary
 */
export function addMissionEventHandler(event: string, expression: Function | string): number

/**
 * Adds a multiplayer event handler (EH) to the given object and returns EH handle.
 * See Event Handlers. ⚠A Multiplayer Event Handler is not saved in a save file and
 * therefore will not be restored on load - use it accordingly.
 *
 * @param object - object to monitor
 * @param type - event handler name
 * @param expression - expression to execute
 * @returns event handler index
 * @see {@link https://community.bistudio.com/wiki/addMPEventHandler}
 * @sqfsyntaxtype binary
 */
export function addMPEventHandler(object: GameObject, type: string, expression: string | Function): number

/**
 * Adds playMusic event handler. Returns id of the handler or -1 when failed. Like
 * addMissionEventHandler, the music event handler is attached to the mission. See
 * Arma 3: Event Handlers - Music Event Handlers.
 *
 * @param type - "MusicStart" or "MusicStop"
 * @param handler - handler; params array is [musicClassname, eventHandlerId, currentPosition,
 * totalLength]
 * @returns event handler id
 * @see {@link https://community.bistudio.com/wiki/addMusicEventHandler}
 * @sqfsyntaxtype unary
 */
export function addMusicEventHandler(type: string, handler: string | Function): number

/**
 * Returns a list of files present in the addon. ⓘQuerying protected .ebo addons
 * will return an empty array [].
 *
 * @param prefix - addon prefix available from allAddonsInfo. Since it is possible to also return
 * all files present in a scenario folder from within Eden Editor or Eden preview
 * with the special prefix $mission
 * @param fileExtension - (Optional) file extension to filter results, for example ".paa"
 * @returns Array<string>
 * @see {@link https://community.bistudio.com/wiki/addonFiles}
 * @sqfsyntaxtype unary
 */
export function addonFiles(prefix: string, fileExtension?: string): Array<string>

/**
 * Sets ownership of a remotely detonatable mine to a unit. If the unit is a
 * player, an action that allows the player to detonate the mine is added to the
 * action menu.
 *
 * @param mine - the mine object
 * @see {@link https://community.bistudio.com/wiki/addOwnedMine}
 * @sqfsyntaxtype binary
 */
export function addOwnedMine(unit: GameObject, mine: GameObject): void

/**
 * MP server only: Adds player score. Kill Type infantry soft armor air killed
 * Score Points 1 2 3 5 -1
 *
 * @param values - score values: [killsInfantry, killsSoft, killsArmor, killsAir, score]
 * @see {@link https://community.bistudio.com/wiki/addPlayerScores}
 * @sqfsyntaxtype binary
 */
export function addPlayerScores(unit: GameObject, values: [number, number, number, number, number]): void

/**
 * Adds weapon item, including magazine, directly to the primaryWeapon. This is
 * used for infantry weapons.
 *
 * @returns false is returned if item can not be added
 * @see {@link https://community.bistudio.com/wiki/addPrimaryWeaponItem}
 * @sqfsyntaxtype binary
 */
export function addPrimaryWeaponItem(unit: GameObject, item: string): void | boolean

/**
 * This command is deprecated since 1.52 and the introduction of remoteExec and
 * remoteExecCall. This event handler will detect if a missionNamespace variable
 * (it is attached to) has been broadcast over network with publicVariable,
 * publicVariableClient or publicVariableServer commands and will execute EH code
 * upon detection. ⓘ
 * • This EH works only in Multiplayer environment
 * • There is no way to remove this EH
 * • This EH will not fire on the machine that executed broadcast with
 * publicVariable command, only on the machines that receive the broadcast
 * • The value of broadcast variable can be exactly the same, it is the actual
 * broadcast that triggers EH not the change in variable
 *
 * @param varName - missionNamespace variable name
 * @param code - executed in missionNamespace; _this is [varName, value, target]
 * @see {@link https://community.bistudio.com/wiki/addPublicVariableEventHandler}
 * @sqfsyntaxtype binary
 */
export function addPublicVariableEventHandler(varName: string, code: Function): void

/**
 * Add a number to the rating of a unit - negative values can be used to reduce the
 * rating. This command is usually used to reward for completed mission
 * objectives.The rating is given at the end of the mission and is automatically
 * adjusted when killing enemies or friendlies. When the rating gets below -2000,
 * the unit's side switches to sideEnemy and the unit is attacked by everyone. ⓘSee
 * also ArmA: Armed Assault: Rating Values and Arma 3: Event Handlers -
 * HandleRating.
 *
 * @see {@link https://community.bistudio.com/wiki/addRating}
 * @sqfsyntaxtype binary
 */
export function addRating(unitName: GameObject, rating: number): void

/**
 * Adds resources to a team member.
 *
 * @see {@link https://community.bistudio.com/wiki/addResources}
 * @sqfsyntaxtype binary
 */
export function addResources(teamMember: TeamMember, resourceN: string): void

/**
 * Adds a number to the score of a unit. Negative values will remove from the
 * score.
 *
 * @see {@link https://community.bistudio.com/wiki/addScore}
 * @sqfsyntaxtype binary
 */
export function addScore(unit: GameObject, score: number): void

/**
 * Adds side score. This is shown in the MP score tab as the total score. MP only.
 *
 * @see {@link https://community.bistudio.com/wiki/addScoreSide}
 * @sqfsyntaxtype binary
 */
export function addScoreSide(side: Side, value: number): void

/**
 * Adds weapon item, including magazine, directly to the secondaryWeapon. This is
 * used for infantry weapons.
 *
 * @see {@link https://community.bistudio.com/wiki/addSecondaryWeaponItem}
 * @sqfsyntaxtype binary
 */
export function addSecondaryWeaponItem(unit: GameObject, item: string): void

/**
 * Adds a unit to the list of units available for Team Switch. Units marked as
 * playable in editor are automatically switchable. This command adds non-playable
 * unit into array of switchableUnits and makes them available for teamSwitch.
 * Singleplayer only!
 *
 * @see {@link https://community.bistudio.com/wiki/addSwitchableUnit}
 * @sqfsyntaxtype unary
 */
export function addSwitchableUnit(unit: GameObject): void

/**
 * Add given member to given team. Effect is local, unless both member and team are
 * local to PC on which command is executed, then effect is global. The same Team
 * Member can be member of several different teams at the same time.
 *
 * @see {@link https://community.bistudio.com/wiki/addTeamMember}
 * @sqfsyntaxtype binary
 */
export function addTeamMember(team: TeamMember, member: TeamMember): void

/**
 * Adds an array of vehicles/units to disposal manager for automatic wreck/body
 * removal. The disposal manager follows wreck/body removal values set in
 * description.ext
 *
 * @param remains - array of vehicles/units
 * @see {@link https://community.bistudio.com/wiki/addToRemainsCollector}
 * @sqfsyntaxtype unary
 */
export function addToRemainsCollector(remains: Array<GameObject>): void

/**
 * Applies torque (rotation momentum) to the center of mass of the given object.
 * Torque force is defined as vector [x, y, z] applied in world space. If you need
 * to define torque in model space, convert the torque vector first by
 * vectorModelToWorld or vectorModelToWorldVisual command. The torque applied as
 * impulse. Diagram below explain which way the object would rotate. For more
 * information see NVIDIA docs ⓘA single application of torque would produce one
 * impulse, which may not be enough. In this case consider applying a series of
 * continuous impulses, for example to make a quad bike to roll forward:
 * onEachFrame { quad addTorque (quad vectorModelToWorld [100,0,0]) }; ⚠This
 * command doesn't follow convention for torque direction, which obeys right-hand
 * rule. To comply, negate all values in the vector.
 *
 * @param object - PhysX object
 * @param torque - world vector in format [x,y,z]
 * @see {@link https://community.bistudio.com/wiki/addTorque}
 * @sqfsyntaxtype binary
 */
export function addTorque(object: GameObject, torque: [number, number, number]): void

/**
 * Create a new uniform and try to link it into uniform slot (given uniform has to
 * be supported by allowedUniforms list of target soldier). ⓘTo check if a uniform
 * is allowed use isUniformAllowed, and to force an incompatible uniform use
 * forceAddUniform.
 *
 * @see {@link https://community.bistudio.com/wiki/addUniform}
 * @sqfsyntaxtype binary
 */
export function addUniform(unit: GameObject, type: string): void

/**
 * Adds a user action event handler to the current mission and returns its event
 * handler index.
 *
 * @param keyName - action key name - see inputAction/actions
 * @param event - event name - see UserAction Event Handlers. Can be one of:
 * @param expression - expression that will be executed in missionNamespace when event handler fires.
 * @returns the index of the currently added UserAction event handler is returned
 * @see {@link https://community.bistudio.com/wiki/addUserActionEventHandler}
 * @sqfsyntaxtype unary
 */
export function addUserActionEventHandler(keyName: string, event: string, expression: Function): number

/**
 * Adds a specified vehicle for use by a specified AI led group. ⓘSee AI Group
 * Vehicle Management for more information.
 *
 * @see {@link https://community.bistudio.com/wiki/addVehicle}
 * @sqfsyntaxtype binary
 */
export function addVehicle(groupName: Group, vehicleName: GameObject): void

/**
 * Create a new vest and try to link it into vest slot.
 *
 * @see {@link https://community.bistudio.com/wiki/addVest}
 * @sqfsyntaxtype binary
 */
export function addVest(unit: GameObject, type: string): void

/**
 * Adds (or inserts when index is given) a new waypoint to a group. The waypoint is
 * placed randomly within a circle with the given center and radius. ⓘFor older
 * titles and prior to Arma 3 v1.90, use setWaypointPosition if you need exact
 * waypoint placement.
 *
 * @param center - PositionAGL (PositionASL if radius is negative) or Object
 * @param radius - random waypoint placement within radius from center; -1 for exact placement
 * @param index - (Optional, default -1) insert at this position; if invalid, appended at end
 * @param name - (Optional, default "") waypointName
 * @returns Waypoint
 * @see {@link https://community.bistudio.com/wiki/addWaypoint}
 * @sqfsyntaxtype binary
 */
export function addWaypoint(groupName: Group, center: PositionAGL | GameObject, radius: number, index?: number, name?: string): Waypoint

/**
 * Remainder of a divided by b.
 *
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/mod}
 * @sqfsyntaxtype binary
 */
export function mod(a: number, b: number): number

/**
 * Low level command to person to move to given position. It is good to check first
 * if AI pilot unit state is COMPLETED moveToCompleted first as this command will
 * set unit into WAIT state waiting for instruction, but only if the unit has
 * COMPLETED.
 *
 * @see {@link https://community.bistudio.com/wiki/moveTo}
 * @sqfsyntaxtype binary
 */
export function moveTo(unit: GameObject, position: PositionATL): void

/**
 * Returns Object with given id. Object's id can be checked in mission editor.
 * ⚠This command was removed as of Armed Assault v1.08; for later versions and
 * titles, use nearestObject command family instead.
 *
 * @returns GameObject
 * @see {@link https://community.bistudio.com/wiki/object}
 * @sqfsyntaxtype unary
 */
export function object(id: number): GameObject

/**
 * A person object controlled by user. In Intros and Outros this isn't set by
 * default and must be assigned.
 *
 * @returns GameObject
 * @see {@link https://community.bistudio.com/wiki/player}
 * @sqfsyntaxtype nullary
 */
export function player(): GameObject

/**
 * Types text to the side radio channel by the specified unit. Use clearRadio to
 * clear chat history ⚠The unit must have an assigned radio item (such as
 * "ItemRadio") to see or transmit the messages. A radio item must have the
 * property simulation = "ItemRadio"; in its CfgWeapons config.
 *
 * @param unit - unit transmitting message
 * @param chatText - message to transmit
 * @see {@link https://community.bistudio.com/wiki/sideChat}
 * @sqfsyntaxtype binary
 */
export function sideChat(unit: GameObject, chatText: string): void

/**
 * Adds given set of compiled instructions to the scheduler. Exactly when the code
 * will be executed is unknown, it depends on how busy is the engine and how filled
 * up is the scheduler. Therefore spawn does not wait for the supplied code to
 * finish, instead, spawn returns a Script handle to the scheduler task. scriptDone
 * command can be used to check the code completion. Additional arguments are
 * passed to the code in local variable _this. Since 1.56 the script handle also
 * exists inside the code in _thisScript variable. To see what spawned scripts are
 * currently in the scheduler, use diag_activeSQFScripts command. ⚠When multiple
 * Code is spawned in an order, there is no guarantee that the spawned Code will
 * execute in the same order (see Example 2). If the order is important, use
 * BIS_fnc_spawnOrdered.
 *
 * @param arguments - arguments passed to the script, available as _this inside the code
 * @returns Script Handle — can be used with scriptDone to check when the spawned script has finished
 * @see {@link https://community.bistudio.com/wiki/spawn}
 * @sqfsyntaxtype binary
 */
export function spawn(arguments: Array<any>, code: Function): any

/**
 * Types text to the system radio channel. The text will be visible only on the PC
 * where command was executed. If you need the message to show on all computers,
 * you have to execute it globally (see remoteExec). Use clearRadio to clear chat
 * history
 *
 * @param text - message to transmit
 * @see {@link https://community.bistudio.com/wiki/systemChat}
 * @sqfsyntaxtype unary
 */
export function systemChat(text: string): void

/**
 * Vehicle in which given unit is mounted. If none, unit is returned.
 * Alternatively, use objectParent ⚠While vehicle may return the vehicle the unit
 * is in for alive units, for dead units which are groupless, this command returns
 * the unit itself - use objectParent instead.
 *
 * @param unitName - alive unit
 * @returns GameObject
 * @see {@link https://community.bistudio.com/wiki/vehicle}
 * @sqfsyntaxtype unary
 */
export function vehicle(unitName: GameObject): GameObject

