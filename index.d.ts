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
 * Adds a weapon to the turret. Use turret path [-1] for driver's turret.
 *
 * @see {@link https://community.bistudio.com/wiki/addWeaponTurret}
 * @sqfsyntaxtype binary
 */
export function addWeaponTurret(vehicle: GameObject, weaponName: string, turretPath: TurretPath): void

/**
 * Check if given vehicle/person/building is alive (i.e. not dead or destroyed).
 *
 * @returns true if alive, false if dead/destroyed
 * @see {@link https://community.bistudio.com/wiki/alive}
 * @sqfsyntaxtype unary
 */
export function alive(object: GameObject): boolean

/**
 * Return a list of all groups created on the following sides east, west,
 * resistance/independent and civilian only. Does not contain groups of sideLogic.
 *
 * @returns Array<Group>
 * @see {@link https://community.bistudio.com/wiki/allGroups}
 * @sqfsyntaxtype nullary
 */
export function allGroups(): Array<Group>

/**
 * Enables / disables an entity's ability to receive damage. This command does not
 * prevent the entity from taking scripted damage from commands such as setDamage,
 * setHit, setHitIndex or setHitPointDamage. ⓘThis command only supports entities
 * (Entity is a child class of Object, i.e. all entities are objects, but not all
 * objects are entities). Consequently, there are objects that are not affected by
 * this command, for example terrain vegetation such as trees.
 *
 * @see {@link https://community.bistudio.com/wiki/allowDamage}
 * @sqfsyntaxtype binary
 */
export function allowDamage(entity: GameObject, allow: boolean): void

/**
 * Returns a list of all units controlled by connected clients. This includes:
 * • Normal human players (including dead players)
 * • Virtual Entities (see Systems → Logic Entities → Virtual Entities in the Eden
 * Editor)
 * ◦ Headless Clients (HeadlessClient_F)
 * ◦ Virtual Curators (VirtualCurator_F, *_VirtualCurator_F)
 * ◦ Virtual Spectators (VirtualSpectator_F) Use BIS_fnc_listPlayers or see Example
 * 1 to only get human players.
 *
 * @returns Array<GameObject>
 * @see {@link https://community.bistudio.com/wiki/allPlayers}
 * @sqfsyntaxtype nullary
 */
export function allPlayers(): Array<GameObject>

/**
 * Returns a list of all units, except agents, dead units or units waiting for
 * respawn, outside and inside vehicles that were created on the following sides
 * east, west, independent and civilian. To get all units of given side, use units
 * Side.
 *
 * @returns Array<GameObject>
 * @see {@link https://community.bistudio.com/wiki/allUnits}
 * @sqfsyntaxtype nullary
 */
export function allUnits(): Array<GameObject>

/**
 * Assign a unit as cargo of a vehicle. Used together with orderGetIn to order a
 * unit to get in as cargo into a specific vehicle. Before usage of this command a
 * subordinate unit has not got the option to get into the cargo space of the
 * vehicle. ⓘSee AI Group Vehicle Management for more information.
 *
 * @see {@link https://community.bistudio.com/wiki/assignAsCargo}
 * @sqfsyntaxtype binary
 */
export function assignAsCargo(unitName: GameObject, vehicleName: GameObject): void

/**
 * Assign a unit as driver of a vehicle. Used together with orderGetIn to order
 * subordinate units to get in as driver of a specific vehicle. Before usage of
 * this command a subordinate unit has not got the option to get into the driver
 * place of the vehicle. ⓘSee AI Group Vehicle Management for more information.
 *
 * @see {@link https://community.bistudio.com/wiki/assignAsDriver}
 * @sqfsyntaxtype binary
 */
export function assignAsDriver(unitName: GameObject, vehicleName: GameObject): void

/**
 * Assign a unit as gunner of a vehicle. Used together with orderGetIn to order
 * subordinate units to get in as gunner of a specific vehicle. Before usage of
 * this command a subordinate unit has not got the option to get into the gunner
 * place of the vehicle. ⓘSee AI Group Vehicle Management for more information.
 *
 * @see {@link https://community.bistudio.com/wiki/assignAsGunner}
 * @sqfsyntaxtype binary
 */
export function assignAsGunner(unitName: GameObject, vehicleName: GameObject): void

/**
 * Returns the role a unit is assigned to within its assigned vehicle. ⓘSee AI
 * Group Vehicle Management for more information.
 *
 * @returns the array which is returned contains:
 * @see {@link https://community.bistudio.com/wiki/assignedVehicleRole}
 * @sqfsyntaxtype unary
 */
export function assignedVehicleRole(unitName: GameObject): Array<any>

/**
 * Attaches an object to another object.
 * • The offset is applied to the object center unless a memory point is provided,
 * in which case the offset will be applied to the memory point position.
 * • If no offset is specified, the current offset between the two objects will be
 * used. ⓘ
 * • All direction commands, such as setDir, setVectorDirAndUp, etc. for an
 * attached object should be used relative to the reference object's direction
 * (i.e. in model space), e.g c_attachedObj setDir 0 will make it face the same
 * direction as the reference object, 90 face to the right, 180 face to the back,
 * etc.
 * • Attached triggers only follow the direction of the object to which they are
 * attached, not pitch or roll.
 *
 * @param object1 - object to attach
 * @param object2 - object to attach to; if a group is provided, its leader is used
 * @param offset - (Optional) the position relative to object2's position
 * @param memPoint - (Optional) see Selection Translations for czech selections names
 * @param followBoneRotation - (Optional) follows the memory point's rotation (if attached to one)
 * @see {@link https://community.bistudio.com/wiki/attachTo}
 * @sqfsyntaxtype binary
 */
export function attachTo(object1: GameObject, object2: GameObject | Group, offset?: PositionRelative, memPoint?: string, followBoneRotation?: boolean): void

/**
 * Closes the currently active dialog with exit code. It does not instantly close
 * the dialog but does it on next simulation cycle. Most common exit codes are:
 * #define IDC_OK 1 // emulate "OK" button #define IDC_CANCEL 2 // emulate "Cancel"
 * button
 *
 * @see {@link https://community.bistudio.com/wiki/closeDialog}
 * @sqfsyntaxtype unary
 */
export function closeDialog(exitcode: number): void

/**
 * Returns an array of config entries which meet criteria in condition code.
 * Command iterates through all available config sub classes of the given config
 * class. Current looked at config is stored in _x variable (similar to alternative
 * count command implementation). Condition has to return true in order for the
 * looked at config to be added to the resulting array. Slightly faster than
 * configProperties, but doesn't account for config properties or inherited
 * entries. ⚠
 * • The condition code passed to configClasses should only be used for simple
 * filter expressions and nothing more
 * • Do not use "isClass _x" in the condition. The engine does this check already
 * • Arma 3 v2.02 brought specific engine optimisations for the following
 * conditions:
 * ◦ "true"
 * ◦ "getNumber (_x >> 'scope') > 0"
 *
 * @returns Array<any>
 * @see {@link https://community.bistudio.com/wiki/configClasses}
 * @sqfsyntaxtype binary
 */
export function configClasses(condition: string, config: any): Array<any>

/**
 * Return root of config entries hierarchy.
 *
 * @returns any
 * @see {@link https://community.bistudio.com/wiki/configFile}
 * @sqfsyntaxtype nullary
 */
export function configFile(): any

/**
 * Returns name of config entry.
 *
 * @returns string
 * @see {@link https://community.bistudio.com/wiki/configName}
 * @sqfsyntaxtype unary
 */
export function configName(config: any): string

/**
 * Copies ANSI text string to the clipboard. If Unicode support is desired, see
 * forceUnicode.
 *
 * @see {@link https://community.bistudio.com/wiki/copyToClipboard}
 * @sqfsyntaxtype unary
 */
export function copyToClipboard(text: string): void

/**
 * Can be used to count:
 * • The number of elements in an array (returns the already internally known array
 * size)
 * • The number of elements in an array matching the condition
 * • The number of sub-entries in a config entry
 * • 1.28 The number of characters in an ANSI string ⓘIf Unicode support is
 * desired, see forceUnicode.
 *
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/count}
 * @sqfsyntaxtype unary
 */
export function count(value: any): number

/**
 * Creates a dialog which is defined either in the mission's description.ext, in
 * the campaign's description.ext or in the global resource.cpp. The given name has
 * to be the class name used in one of these files. If another dialog is already
 * opened, the desired dialog is created as a child dialog of the one already
 * opened. ⓘBy default, displays created with createDisplay are rendered on top of
 * dialogs created with createDialog. If forceOnTop is set to true, the dialog will
 * be rendered on top of displays.
 *
 * @param dialogName - class name used in the description.ext, resource.cpp or config.cpp
 * @returns true when the dialog was created successfully
 * @see {@link https://community.bistudio.com/wiki/createDialog}
 * @sqfsyntaxtype unary
 */
export function createDialog(dialogName: string): boolean

/**
 * Creates a new Group for the given Side. Using this command if the group limit is
 * reached will return grpNull. The new Group exists globally, but it's locality is
 * where this command was executed. Game 1.00 1.00 1.00 1.00 1.50 1.00 1.00 1.68
 * Group auto-deletion Group limit per side 63 144 288 ⚠
 * • Groups can only be created for the west/blufor, opfor/east,
 * independent/resistance, civilian and sideLogic sides - any other side will
 * return grpNull
 * • Before Arma 3, a Side center must exist before group creation (either by
 * having editor-placed units or createCenter usage)
 * • createCenter usage is not needed anymore as all centers are automatically
 * created.
 * • When the last unit leaves its group, the group usually gets immediately
 * auto-deleted, regardless of its auto-deletion setting.
 *
 * @returns grpNull if the group limit is reached
 * @see {@link https://community.bistudio.com/wiki/createGroup}
 * @sqfsyntaxtype unary
 */
export function createGroup(side: Side): Group

/**
 * Creates a new map marker at the given position. The marker will be created for
 * every connected player as well as all JIP players. The marker name has to be
 * unique; the command will be ignored if a marker with the given name already
 * exists. ⚠The marker will be visible only once at least markerType has been
 * defined: _marker = createMarker ["markername", player]; // Not visible yet.
 * _marker setMarkerType "hd_dot"; // Visible. ⓘIf the marker position is given in
 * 3D format, the z-coordinate is stored with the marker and will be used when the
 * marker is passed to commands such as createVehicle, createUnit, createAgent,
 * createMine or setVehiclePosition.When a marker is manually placed in the editor,
 * z is always 0, which means the marker is placed on the ground. But when the
 * player places a marker on the map in game, it is placed at sea level, so the
 * z-coordinate of that marker is -getTerrainHeightASL markerPos "userMarker";.
 *
 * @param name - the marker's name, used to reference the marker in scripts.
 * @param position - In case of an object, the object's model [0,0,0] is used.
 * @param channel - (Optional, default -1) the marker channel - see Channel IDs (for multiplayer)
 * @param creator - (Optional, default objNull) the marker creator (for multiplayer)
 * @returns the marker's name or empty string if the marker name is not unique.
 * @see {@link https://community.bistudio.com/wiki/createMarker}
 * @sqfsyntaxtype unary
 */
export function createMarker(name: string, position: any | GameObject, channel?: number, creator?: GameObject): string

/**
 * Creates an empty object of given classname type. See Arma 3: Assets / Arma 3:
 * createVehicle/vehicles, or Category:CfgVehicles for earlier games. ⓘ
 * • To create objects of type "Logic", use createUnit.
 * • To create an editable Eden Editor entity, see create3DENEntity. To avoid
 * vehicle randomisation in Arma 3, set the BIS_enableRandomization variable
 * immediately after creating the vehicle: private "_vehicle"; isNil { // run
 * unscheduled _vehicle = "C_Offroad_01_F" createVehicle getPosATL player; _vehicle
 * setVariable ["BIS_enableRandomization", false]; }; // the _vehicle variable is
 * available after that See the Arma 3: Vehicle Customisation page for more
 * information and settings.
 *
 * @param type - vehicle/object className
 * @param position - desired placement position. If the exact position is occupied, nearest empty
 * position is used.
 * @returns GameObject
 * @see {@link https://community.bistudio.com/wiki/createVehicle}
 * @sqfsyntaxtype binary
 */
export function createVehicle(type: string, position: PositionAGL): GameObject

/**
 * Creates vehicle crew corresponding to the provided vehicle's faction. If the
 * vehicle is already occupied, the command will only create missing crew in the
 * existing vehicle's group. To find out which crew will be created, use
 * BIS_fnc_vehicleCrewTurrets. This command: Does Does not
 * • 1.26 create a group if one is needed (otherwise uses group _vehicle)
 * • create a driver if the vehicle needs one (hasDriver = 1; in config)
 * • create all non-FFV turrets gunners (if the turret needs one - config
 * {hasGunner without dontCreateAI)
 * • create crew with ranks - with the driver as "LIEUTENANT" and all turret units
 * as "SERGEANT", unlike a crewed vehicle placed in Eden Editor where all units are
 * "PRIVATE".
 * • add vehicle to the group, unlike a crewed vehicle placed in Eden Editor. See
 * BIS_fnc_spawnVehicle to spawn a crew-full vehicle with group addition
 * • create cargo units.
 *
 * @param vehicle - vehicle to populate with crew
 * @returns the group of the created crew (since ; before that returned Nothing)
 * @see {@link https://community.bistudio.com/wiki/createVehicleCrew}
 * @sqfsyntaxtype unary
 */
export function createVehicleCrew(vehicle: GameObject): Group

/**
 * Creates an object of the given type. The Created object is not transferred
 * through network in MP games. netId of such vehicle in multiplayer will be "0:0".
 * To disable local vehicle creation, use CfgDisabledCommands to blacklist this
 * command. Alternatively, you can use createSimpleObject with local option enabled
 * where applicable.
 *
 * @param type - vehicle/object className
 * @returns GameObject
 * @see {@link https://community.bistudio.com/wiki/createVehicleLocal}
 * @sqfsyntaxtype binary
 */
export function createVehicleLocal(type: string, position: PositionAGL): GameObject

/**
 * Returns the crew (both dead and alive) of the given vehicle.
 *
 * @returns an array with all units in the vehicle is returned.
 * @see {@link https://community.bistudio.com/wiki/crew}
 * @sqfsyntaxtype unary
 */
export function crew(vehicleName: GameObject): Array<any>

/**
 * Set the Structured Text which will be displayed in structured text control.
 *
 * @see {@link https://community.bistudio.com/wiki/ctrlSetStructuredText}
 * @sqfsyntaxtype binary
 */
export function ctrlSetStructuredText(control: Control, structuredText: StructuredText): void

/**
 * Sets the text of a control of the currently active user dialog or display. This
 * command can be used for static texts, buttons, edit lines and active texts as
 * well as for images, where you can use it to set the image path. Read Arma: GUI
 * Configuration for more information about user dialogs and controls. Use endl to
 * insert line breaks. Since 2.06 supported control types are:
 * • CT_STATIC
 * • CT_EDIT
 * • CT_XKEYDESC
 * • CT_XBUTTON
 * • CT_SHORTCUTBUTTON
 * • CT_STRUCTURED_TEXT
 * • CT_BUTTON
 * • CT_ACTIVETEXT Since 2.22 CT_PROGRESS is also supported.
 *
 * @param idc - control IDC
 * @param text - text or image path or texture, depending on the control type
 * @see {@link https://community.bistudio.com/wiki/ctrlSetText}
 * @sqfsyntaxtype unary
 */
export function ctrlSetText(idc: number, text: string): void

/**
 * Sets text color of given control. As of Arma 3 v1.40 this command can also be
 * used to change fill-color of a CT_PROGRESS control. ⓘAlso try
 * ctrlSetForegroundColor, if this command doesn't have the desired effect.
 *
 * @see {@link https://community.bistudio.com/wiki/ctrlSetTextColor}
 * @sqfsyntaxtype binary
 */
export function ctrlSetTextColor(control: Control, color: any): void

/**
 * Returns current coeficient setting.
 *
 * @param curatorObj - curator module.
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/curatorCoef}
 * @sqfsyntaxtype binary
 */
export function curatorCoef(curatorObj: GameObject, action: string): number

/**
 * Returns the index of the current waypoint (not the waypoint in Waypoint Array
 * format).
 * • To determine the validity of the index, compare it to the waypoints count.
 * • If all waypoints are completed, then the index is 1 greater than the last
 * valid index.
 * • If there are no waypoints, then the index is 0. By default, a group has one
 * already-completed waypoint at their starting position, making the first waypoint
 * number one, not zero.
 *
 * @returns index of the current waypoint
 * @see {@link https://community.bistudio.com/wiki/currentWaypoint}
 * @sqfsyntaxtype unary
 */
export function currentWaypoint(groupName: Group): number

/**
 * Display a resource defined in RscTitles of the mission's Description.ext, the
 * campaign's description.ext or the global config. For greater efficiency and ease
 * of modability, it is recommended to use named layers available with String and
 * Syntax 2. ⚠To avoid conflicts with existing layers it is recommended to register
 * a layer with BIS_fnc_rscLayer and to start the name with a TAG:
 * Copy("TAG_myLayer" call BIS_fnc_rscLayer) cutRsc ["myRsc", "PLAIN"];
 * "TAG_myLayer" cutRsc ["myRsc", "PLAIN"];
 *
 * @param className - the class name of the resource; "Default" will remove the current resource
 * @param effect - one of "PLAIN", "PLAIN DOWN", "BLACK", "BLACK FADED", "BLACK OUT", "BLACK IN",
 * "WHITE OUT", "WHITE IN"
 * @param speed - (Optional, default -1) time in seconds to fade in resource
 * @param showInMap - (Optional, default true) false to hide the resource when the map is opened
 * @param drawOverHUD - (Optional, default true) false to show the resource under in-game HUD
 * @see {@link https://community.bistudio.com/wiki/cutRsc}
 * @sqfsyntaxtype unary
 */
export function cutRsc(className: string, effect: string, speed?: number, showInMap?: boolean, drawOverHUD?: boolean): void

/**
 * Displays a text message in the center of the screen. The text can be displayed
 * on multiple lines by using "\n" new line characters: cutText
 * ["line1\nline2\nline3", "PLAIN"]; For greater efficiency and ease of modability
 * it is recommended to use named layers through the alternative syntax.
 *
 * @param text - text to be displayed
 * @param type - one of "PLAIN", "PLAIN DOWN", "BLACK", "BLACK FADED", "BLACK OUT", "BLACK IN",
 * "WHITE OUT" and "WHITE IN". See Title Effect Types for more information about
 * these values.
 * @param speed - (Optional, default 1) time in seconds to fade in resource. If 0 or less, default
 * value is used
 * @param showInMap - (Optional, default true) false to hide the text when the map is opened
 * @param isStructuredText - (Optional, default false) true to switch support for Structured Text formatting
 * - see Example 4
 * @param drawOverHUD - (Optional, default true) false to show the text under in-game HUD
 * @see {@link https://community.bistudio.com/wiki/cutText}
 * @sqfsyntaxtype unary
 */
export function cutText(text: string, type: string, speed?: number, showInMap?: boolean, isStructuredText?: boolean, drawOverHUD?: boolean): void

/**
 * Return the damage value of an object.
 *
 * @returns the returned number in range (healthy) 0..1 (dead).
 * @see {@link https://community.bistudio.com/wiki/damage}
 * @sqfsyntaxtype unary
 */
export function damage(object: GameObject): number

/**
 * Destroys the given group - the group must be empty and local to the machine
 * executing this command. ⓘIn Arma 3 you can find out locality of the group with
 * local command, unlike with previous games. However owner and setOwner don't work
 * with groups anywhere. The group will always be local to the client that created
 * it, until the client disconnects, then the group becomes local to the server. So
 * if you need to delete a group, delete all members first then execute deleteGroup
 * where is it local. In Arma 3 when the last unit leaves a group, the group gets
 * automatically deleted. Manually deleting all units from a group, however, does
 * not automatically delete the empty group. To force the group to get auto-deleted
 * when empty, use deleteGroupWhenEmpty.
 *
 * @see {@link https://community.bistudio.com/wiki/deleteGroup}
 * @sqfsyntaxtype unary
 */
export function deleteGroup(group: Group): void

/**
 * Destroys the given marker.
 *
 * @see {@link https://community.bistudio.com/wiki/deleteMarker}
 * @sqfsyntaxtype unary
 */
export function deleteMarker(name: string): void

/**
 * Deletes an object. Only objects inserted in the mission editor and objects
 * created during the game's progress can be deleted by this command. Terrain
 * objects and players cannot be deleted. ⓘThe actual object deletion, when the
 * object becomes objNull, happens on the next frame after command execution, but
 * there are some object modifications that happen immediately. For example if the
 * object is a unit in a group, it immediately becomes groupless (isNull group
 * _unit; // true).
 *
 * @see {@link https://community.bistudio.com/wiki/deleteVehicle}
 * @sqfsyntaxtype unary
 */
export function deleteVehicle(object: GameObject): void

/**
 * Removes the specified waypoint. ⓘ
 * • When a waypoint is deleted, all other group waypoints are immediately
 * re-indexed. See Example 2 for a deletion of all group's waypoints.
 * • Deleting a group's current waypoint will not stop the group on its tracks.
 *
 * @see {@link https://community.bistudio.com/wiki/deleteWaypoint}
 * @sqfsyntaxtype unary
 */
export function deleteWaypoint(group: Group, index: number): void

/**
 * Detaches previously attached with attachTo object.
 *
 * @see {@link https://community.bistudio.com/wiki/detach}
 * @sqfsyntaxtype unary
 */
export function detach(object: GameObject): void

/**
 * Dumps the argument's value to the report file. Each call creates a new line in
 * the file.
 *
 * @see {@link https://community.bistudio.com/wiki/diag_log}
 * @sqfsyntaxtype unary
 */
export function diag_log(output: any): void

/**
 * Adds an event handler to the given display. See User Interface Event Handlers
 * for the full list of event names. If applicable, see DIK_KeyCodes for a list of
 * key code constants, which are relevant to key related user interface events
 * like: KeyDown & KeyUp. ⚠Display EHs are processed from last to first added; an
 * input override should be set up in the first added EH. ⓘThe event handler ID can
 * be accessed inside the event handler code using the c_thisEventHandler magic
 * variable.
 *
 * @param eventName - event name ⚠When using the event names listed here with the ctrlAddEventHandler,
 * ctrlSetEventHandler, displayAddEventHandler or displaySetEventHandler commands,
 * the prefix "on" in the event name must be removed (e.g. 'ButtonDown' instead of
 * 'onButtonDown').
 * @param code - the code which gets executed when event is triggered. Returning true in event
 * handler code will override default engine handling for keyboard events. Several
 * Magic Variables are available:
 * @returns index of the newly added event handler or -1 if creation failed
 * @see {@link https://community.bistudio.com/wiki/displayAddEventHandler}
 * @sqfsyntaxtype binary
 */
export function displayAddEventHandler(display: Display, eventName: string, code: string | Function): number

/**
 * Return child control with specified idc.
 *
 * @returns Control
 * @see {@link https://community.bistudio.com/wiki/displayCtrl}
 * @sqfsyntaxtype binary
 */
export function displayCtrl(display: Display, idc: number): Control

/**
 * Remove a given event handler from the given display.
 *
 * @param handlerType - type of the event handler
 * @param id - index of the event handler
 * @see {@link https://community.bistudio.com/wiki/displayRemoveEventHandler}
 * @sqfsyntaxtype binary
 */
export function displayRemoveEventHandler(display: Display, handlerType: string, id: number): void

/**
 * Returns a distance in meters between Objects, Positions or Locations. ⚠If
 * positions are supplied as arguments, the coordinates are treated as PositionAGL.
 * If Position2D is supplied, z is assumed 0. If you need distance between two
 * Position3D coordinates, use vectorDistance.
 *
 * @returns distance in meters or 1e10 if distance cannot be calculated
 * @see {@link https://community.bistudio.com/wiki/distance}
 * @sqfsyntaxtype binary
 */
export function distance(param1: GameObject | PositionAGL | any, param2: GameObject | PositionAGL | any): number

/**
 * Returns the driver of a vehicle.
 *
 * @returns The unit sitting in the driver place is returned. If vehicle is not a vehicle but a person, the person is returned.
 * @see {@link https://community.bistudio.com/wiki/driver}
 * @sqfsyntaxtype unary
 */
export function driver(vehicle: GameObject): GameObject

/**
 * Enables or disables the ability to be attached to a rope end for the given
 * entity.
 *
 * @param entity - given entity
 * @param enable - false to disable rope attachment
 * @see {@link https://community.bistudio.com/wiki/enableRopeAttach}
 * @sqfsyntaxtype binary
 */
export function enableRopeAttach(entity: GameObject, enable: boolean): void

/**
 * Searches for an array element within an array or an ANSI string within an ANSI
 * string. If Unicode support is desired, see forceUnicode. ⚠Search is
 * cASe-seNsItiVE!
 *
 * @param array - array to search in
 * @param element - array element to find
 * @returns zero-based position of the first array element that matches x, -1 if not found
 * @see {@link https://community.bistudio.com/wiki/find}
 * @sqfsyntaxtype binary
 */
export function find(array: Array<any>, element: any): number

/**
 * Finds a display by its IDD which can either be defined in missionConfigFile
 * (description.ext) or configFile (config.cpp) or by its UI On Texture's unique
 * name (see displayUniqueName). If the specified display cannot be found,
 * displayNull is returned. ⚠Dedicated servers and headless clients do not have a
 * primary display (e.g findDisplay 46 will return displayNull). Detect both with
 * the hasInterface command. ⓘFor a list of (almost) all Arma 3's IDDs, see Arma 3:
 * IDD List.
 *
 * @returns Display
 * @see {@link https://community.bistudio.com/wiki/findDisplay}
 * @sqfsyntaxtype unary
 */
export function findDisplay(idd: number): Display

/**
 * Composes a string containing other variables or other variable types. Converts
 * any variable type to a string. ⚠
 * • To convert a string back to a number, see parseNumber.
 * • joinString can be a bit faster, without string length limitation. ⓘ
 * • the maximum length of the string is 8,388,608 characters (was 8191 before)
 * • two consecutive percent symbols will be formatted to a single percent symbol
 * in the final string (see Example 3) Since 2.18
 *
 * @param formatString - a string containing text and/or references to the variables listed below in the
 * array. The references appear in the form of %1, %2 etc.
 * @param varN - variable referenced by %N
 * @returns the full string (up to 8kb, see above) is returned.
 * @see {@link https://community.bistudio.com/wiki/format}
 * @sqfsyntaxtype unary
 */
export function format(formatString: string, varN: any): string

/**
 * Returns an array with all crew inside given vehicle, with or without empty
 * seats. ⚠With the introduction of person turrets (FFV), the returned cargoIndex
 * works with moveInCargo but does not with actions such as "GetInCargo" and
 * "MoveToCargo". To find out indexes for actions, use the "cargo" filter (See
 * Example 3).
 *
 * @returns list of arrays in format [unit, role, cargoIndex, turretPath, personTurret, assignedUnit, positionName]:
 * @see {@link https://community.bistudio.com/wiki/fullCrew}
 * @sqfsyntaxtype unary
 */
export function fullCrew(vehicle: GameObject): Array<any>

/**
 * Get provided object's hit points damage.
 *
 * @param entity - object to be queried
 * @returns [] if entity is null or has no shape, otherwise [hitpointNames, selectionNames, damageValues]:
 * @see {@link https://community.bistudio.com/wiki/getAllHitPointsDamage}
 * @sqfsyntaxtype unary
 */
export function getAllHitPointsDamage(entity: GameObject): Array<any>

/**
 * Returns the object damage.
 *
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/getDammage}
 * @sqfsyntaxtype unary
 */
export function getDammage(object: GameObject): number

/**
 * Returns the object heading in the range 0..360. The alternative syntax gets
 * heading from one object or position to another object or position, and should be
 * used instead of BIS_fnc_dirTo.
 *
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/getDir}
 * @sqfsyntaxtype unary
 */
export function getDir(object: GameObject): number

/**
 * Returns object or location position. If the argument is an object, the return
 * value is in format PositionAGLS. The alternative syntax gets the position given
 * distance and heading away from provided object or position - the command
 * equivalent of BIS_fnc_relPos. ⚠Do not use this command's first syntax to get an
 * object's position in 3D format:
 * • the Z value from this command is relative to the surface underneath, and there
 * is no compatible setter command to use it with;the commonly misused code: _obj1
 * setPos getPos _obj2 is absolutely wrong
 * • this command is significantly slower than other position commands because it
 * has to calculate the surface below a position from objects in the (2D) area; its
 * performance therefore suffers from areas with a high density of objects such as
 * cities, and can easily be ~20x slower than other, simpler position commands -
 * see this benchmark. The only correct usage of this command is to determine the
 * altitude of an object from the surface below it (see Example 4).
 *
 * @returns where Z is the height over the surface underneath
 * @see {@link https://community.bistudio.com/wiki/getPos}
 * @sqfsyntaxtype unary
 */
export function getPos(object: GameObject): PositionAGLS

/**
 * Returns the object position height above sea level.
 *
 * @returns PositionASL
 * @see {@link https://community.bistudio.com/wiki/getPosASL}
 * @sqfsyntaxtype unary
 */
export function getPosASL(object: GameObject): PositionASL

/**
 * Returns the position of an object relative to the terrain.
 *
 * @returns PositionATL
 * @see {@link https://community.bistudio.com/wiki/getPosATL}
 * @sqfsyntaxtype unary
 */
export function getPosATL(object: GameObject): PositionATL

/**
 * Return object which is sling loaded by vehicle
 *
 * @returns the sling loaded vehicle. objNull if nothing is sling loaded.
 * @see {@link https://community.bistudio.com/wiki/getSlingLoad}
 * @sqfsyntaxtype unary
 */
export function getSlingLoad(vehicle: GameObject): GameObject

/**
 * Extracts localized text from config entry, if entry is subject to localization,
 * otherwise returns text value. To obtain the translation key itself, see
 * getTextRaw.
 *
 * @returns text value
 * @see {@link https://community.bistudio.com/wiki/getText}
 * @sqfsyntaxtype unary
 */
export function getText(config: any): string

/**
 * Returns the value of variable in the variable space assigned to various data
 * types. All available data types combinations: Primary syntax (String)
 * Alternative syntax (Array) Code Since Code Since Namespace getVariable String -
 * Namespace getVariable Array Arma 2: Operation Arrowhead v1.60 Object getVariable
 * String - Object getVariable Array - Group getVariable String - Group getVariable
 * Array - Team Member getVariable String - Team Member getVariable Array - Task
 * getVariable String - Task getVariable Array Arma 3 v1.68 Location getVariable
 * String - Location getVariable Array Arma 3 v1.68 Control getVariable String -
 * Control getVariable Array Arma 3 v1.56 Display getVariable String Arma 3 v1.56
 * Display getVariable Array Arma 3 v1.56 ⚠When variable is set on a Task, it is
 * not actually set on the task itself, but on the FSM attached to the task. If
 * there is no FSM, getVariable will not work. In the case of Alt Syntax usage in
 * Arma 3, defaultValue will be returned if:
 * • Requested variable is either undefined or nil
 * • Variable namespace is null (objNull, grpNull, etc.)
 *
 * @param name - variable name in given namespace
 * @returns any
 * @see {@link https://community.bistudio.com/wiki/getVariable}
 * @sqfsyntaxtype binary
 */
export function getVariable(varspace: any, name: string): any

/**
 * Types text to the global radio channel. The text will be visible only on the PC
 * where command was executed. If you need the message to show on all computers,
 * you have to execute it globally (see remoteExec). Use clearRadio to clear chat
 * history
 *
 * @param unit - unit transmitting message
 * @param chatText - message to transmit
 * @see {@link https://community.bistudio.com/wiki/globalChat}
 * @sqfsyntaxtype binary
 */
export function globalChat(unit: GameObject, chatText: string): void

/**
 * Returns the group a unit is assigned to.
 *
 * @returns for dead units, the returned group equals grpNull.
 * @see {@link https://community.bistudio.com/wiki/group}
 * @sqfsyntaxtype unary
 */
export function group(object: GameObject): Group

/**
 * Types text to the group radio channel. The text will be visible only on the PC
 * where command was executed. If you need the message to show on all computers,
 * you have to execute it globally (see remoteExec). Use clearRadio to clear chat
 * history ⚠The unit must have an assigned radio item (such as "ItemRadio") to see
 * or transmit the messages. A radio item must have the property simulation =
 * "ItemRadio"; in its CfgWeapons config.
 *
 * @param unit - unit transmitting message
 * @param chatText - message to transmit
 * @see {@link https://community.bistudio.com/wiki/groupChat}
 * @sqfsyntaxtype binary
 */
export function groupChat(unit: GameObject, chatText: string): void

/**
 * Returns a group's name or a unit's group ID number.
 *
 * @returns the group's name (e.g "Alpha Red")
 * @see {@link https://community.bistudio.com/wiki/groupID}
 * @sqfsyntaxtype unary
 */
export function groupId(group: Group): string

/**
 * Returns the gunner of a vehicle.
 *
 * @returns the person sitting in the gunner place is returned. If vehicle is not a vehicle but a person, the person is returned.
 * @see {@link https://community.bistudio.com/wiki/gunner}
 * @sqfsyntaxtype unary
 */
export function gunner(vehicle: GameObject): GameObject

/**
 * Hide entity. Can be used on soldiers and vehicles, also on static objects.
 *
 * @see {@link https://community.bistudio.com/wiki/hideObject}
 * @sqfsyntaxtype unary
 */
export function hideObject(object: GameObject): void

/**
 * Outputs a hint message to the right of the screen (left of the screen in
 * Operation Flashpoint) with a sound (except in Armed Assault). To split message
 * in multiple lines either use Structured Text or \n (in lower case). Armed
 * Assault hints are silent. For later titles, see hintSilent.
 *
 * @param message - the message to display.
 * @see {@link https://community.bistudio.com/wiki/hint}
 * @sqfsyntaxtype unary
 */
export function hint(message: string | StructuredText): void

/**
 * Checks whether the given object or type is (a subtype) of the given type. While
 * Syntax 1 and Syntax 2 only support CfgVehicles, 1.00CfgAmmo and
 * CfgNonAIVehicles, Syntax 3 can be used with any config, including the mission
 * config.
 *
 * @returns boolean
 * @see {@link https://community.bistudio.com/wiki/isKindOf}
 * @sqfsyntaxtype binary
 */
export function isKindOf(object: GameObject, typeName: string): boolean

/**
 * Tests whether a variable is nil or undefined from its identifier, or whether the
 * given expression evaluates to nil or Nothing. This command does not exist in
 * Operation Flashpoint/Arma: Cold War Assault but can be emulated (see Example 5).
 *
 * @param variableName - missionNamespace's or local variable's identifier (e.g "globalVariable",
 * "_localVariable")
 * @returns true if variable is nil or undefined
 * @see {@link https://community.bistudio.com/wiki/isNil}
 * @sqfsyntaxtype unary
 */
export function isNil(variableName: string): boolean

/**
 * Checks whether the tested item is null. Which null type the item has to be equal
 * to depends on the type of game entity tested: Type Object Group Control Display
 * Location Task Script Config Diary Record Team Member Null value objNull grpNull
 * controlNull displayNull locationNull taskNull scriptNull configNull
 * diaryRecordNull teamMemberNull Since 1.00 1.00 1.00 1.30 1.54 2.00 2.10 ⚠A test
 * via == does not work because a null value is not equal to anything, not even
 * itself (configNull being the exception). See also isEqualTo.
 *
 * @returns boolean
 * @see {@link https://community.bistudio.com/wiki/isNull}
 * @sqfsyntaxtype unary
 */
export function isNull(entity: any | DiaryRecord): boolean

/**
 * Checks visibility of a given object on the local machine.
 *
 * @param object - object to test
 * @returns true if hidden, false if visible
 * @see {@link https://community.bistudio.com/wiki/isObjectHidden}
 * @sqfsyntaxtype unary
 */
export function isObjectHidden(object: GameObject): boolean

/**
 * Checks if given person is a player. Returns true for headless clients as well.
 * ⓘPrior to Arma 3 v2.02, in some cases the identity of certain player units could
 * fail to propagate to other clients and the server, which caused isPlayer and
 * getPlayerUID to incorrectly return false and "" respectively, where the affected
 * units were not local. See this GitHub bug report for more info. Remain vigilant
 * toward potential false negatives. ⚠When used on vehicles, this command will
 * return true if effectiveCommander of the vehicle is player. Just because it
 * returns true does not automatically mean we have a player unit. Unlike main
 * syntax, alternative syntax always returns false when used on vehicles, even if
 * they're controlled by a player.
 *
 * @returns boolean
 * @see {@link https://community.bistudio.com/wiki/isPlayer}
 * @sqfsyntaxtype unary
 */
export function isPlayer(unit: GameObject): boolean

/**
 * Join all units in the array to given group silently (without radio message). To
 * have a group member leave a group, join him with the grpNull group (e.g. [guy1]
 * joinSilent grpNull), but beware, as brand new group is created for the leaving
 * unit and this could result in the number of groups in a mission growing out of
 * control.
 *
 * @param unitArray - units to join group
 * @see {@link https://community.bistudio.com/wiki/joinSilent}
 * @sqfsyntaxtype binary
 */
export function joinSilent(unitArray: Array<GameObject>, group: GameObject | Group): void

/**
 * Returns the group leader for the given unit or group. For dead units, objNull is
 * returned.
 *
 * @returns GameObject
 * @see {@link https://community.bistudio.com/wiki/leader}
 * @sqfsyntaxtype unary
 */
export function leader(unitOrGroup: GameObject | Group): GameObject

/**
 * Remainder of a divided by b.
 *
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/mod}
 * @sqfsyntaxtype binary
 */
export function mod(a: number, b: number): number

/**
 * Moves a unit into a vehicle cargo position (immediately and without animation).
 * ⓘSee AI Group Vehicle Management for more information. ⚠If the unit is already
 * in a vehicle, nothing will happen. You should use moveOut to move the unit out
 * of his vehicle before trying to move him into a new (or same) vehicle.
 *
 * @see {@link https://community.bistudio.com/wiki/moveInCargo}
 * @sqfsyntaxtype binary
 */
export function moveInCargo(unit: GameObject, vehicle: GameObject): void

/**
 * Moves soldier into vehicle driver position (immediate, no animation). ⓘSee AI
 * Group Vehicle Management for more information. ⚠If the unit is already in a
 * vehicle, nothing will happen unless moveOut (since Arma 2) is used first to move
 * the unit out of their vehicle (see Example 2).
 *
 * @see {@link https://community.bistudio.com/wiki/moveInDriver}
 * @sqfsyntaxtype binary
 */
export function moveInDriver(unit: GameObject, vehicle: GameObject): void

/**
 * Move the unit into vehicle gunner position (immediate, no animation). ⓘSee AI
 * Group Vehicle Management for more information. ⚠If the unit is already in a
 * vehicle, nothing will happen. You should use moveOut to move the unit out of his
 * vehicle before trying to move him into a new (or same) vehicle.
 *
 * @see {@link https://community.bistudio.com/wiki/moveInGunner}
 * @sqfsyntaxtype binary
 */
export function moveInGunner(unitName: GameObject, vehicle: GameObject): void

/**
 * Moves the soldier out of the vehicle. Notes:
 * • Works for both AI and player entities
 * • AI unit gets back in - unless is under player command or combined with other
 * sqf commands (orderGetIn false, allowGetIn false or leaveVehicle)
 * • Respects the vehicle's lock state (same as action "Eject") - unlike doGetOut,
 * commandGetOut. It will work for player entities regardless though
 * • Still executes when the vehicle is moving/flying (same as action "Eject") -
 * unlike doGetOut, commandGetOut
 * • Without vehicle's position's get out animation - unlike action eject,
 * doGetOut, commandGetOut
 * • Immediately - unlike action eject, doGetOut, commandGetOut
 * • Works also on dead units (same as action "Eject" (but one after another)) -
 * unlike doGetOut, commandGetOut
 * • Does not work for UAV crew
 * • Does not work for remoteControlled units
 * • Works on unconscious (same as action "Eject" (but one after another)) - unlike
 * doGetOut, commandGetOut (unless AI under player command)
 *
 * @param soldier - unit (only a living unit before )
 * @see {@link https://community.bistudio.com/wiki/moveOut}
 * @sqfsyntaxtype unary
 */
export function moveOut(soldier: GameObject): void

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
 * When argument is Object, the command returns the name given to a unit using the
 * setIdentity instruction or selected randomly by the game engine if setIdentity
 * has not been used on the unit. If used on vehicle, name of first crew member (in
 * order commander, driver, gunner). If used on an object, "Error: No unit" is
 * being returned.
 *
 * @returns string
 * @see {@link https://community.bistudio.com/wiki/name}
 * @sqfsyntaxtype unary
 */
export function name(object: GameObject): string

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
 * Force all units in the array to get in or out of their assigned vehicles. Units
 * must be assigned to a vehicle before this command will do anything. ⓘSee AI
 * Group Vehicle Management for more information.
 *
 * @see {@link https://community.bistudio.com/wiki/orderGetIn}
 * @sqfsyntaxtype binary
 */
export function orderGetIn(unitArray: Array<GameObject>, order: boolean): void

/**
 * Returns a list of playable units in a multiplayer game (occupied by both AI or
 * players), created on the following sides east/opfor, west/blufor,
 * resistance/independent and civilian only. Does not contain units of sideLogic.
 * ⓘThis command returns an empty array in Singleplayer; use switchableUnits
 * instead. ⚠This command does not include dead players awaiting for respawn.
 *
 * @returns Array<GameObject>
 * @see {@link https://community.bistudio.com/wiki/playableUnits}
 * @sqfsyntaxtype nullary
 */
export function playableUnits(): Array<GameObject>

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
 * Plays a sound from CfgSounds. Sound can be defined in missionConfigFile,
 * configFile or campaignConfigFile.
 *
 * @returns the speaker object (Nothing before )
 * @see {@link https://community.bistudio.com/wiki/playSound}
 * @sqfsyntaxtype unary
 */
export function playSound(soundName: string): GameObject

/**
 * Returns position of an object (alias of getPos) or location (alias of
 * locationPosition). ⚠Do not use this command to get an object's position in 3D.
 * See getPos for an explanation and alternatives.
 *
 * @returns PositionAGLS
 * @see {@link https://community.bistudio.com/wiki/position}
 * @sqfsyntaxtype unary
 */
export function position(object: GameObject): PositionAGLS

/**
 * Returns the global namespace attached to the active user profile. Use
 * setVariable and getVariable to save and load data to and from this Namespace. A
 * variable can be deleted by setting its value to nil. By default the variables
 * set in this namespace will exist while the game is running, and variables are
 * saved persistently when the game is closed. Saving can also be forced by using
 * saveProfileNamespace to prevent data loss on e.g game crash. The variables are
 * stored next to the user profile in a file named myUsername.vars.GAMENAME.
 *
 * @returns Namespace
 * @see {@link https://community.bistudio.com/wiki/profileNamespace}
 * @sqfsyntaxtype nullary
 */
export function profileNamespace(): Namespace

/**
 * Reliably broadcasts missionNamespace variable and its current value to all
 * computers (server/client). Variables broadcast with publicVariable during a
 * mission will be available to JIP clients with the value they held at the time.
 * Such variables are persistent and sent to the JIP client before the first batch
 * of client-side Event Scripts (such as init.sqf) is run. ⚠Using publicVariable
 * too frequently and/or with a lot of data can cause other aspects of the game to
 * experience bandwidth problems. The following Data Types are supported: Type
 * Number Boolean Object Group String Text Array Code Nothing (nil) HashMap Since
 * 1.34 1.00 1.09 1.26 2.02 ⚠It is not possible (and illogical) to transfer a local
 * entity reference, such as scripts, displays or local objects. Also, note that
 * Team Member is not supported.
 *
 * @param varName - the global variable's Identifier
 * @see {@link https://community.bistudio.com/wiki/publicVariable}
 * @sqfsyntaxtype unary
 */
export function publicVariable(varName: string): void

/**
 * Asks the server to execute the given function or script command on the given
 * target machine(s).
 * • Functions are executed in the scheduled environment; suspension is allowed.
 * • Script commands are executed in the unscheduled environment; suspension is not
 * allowed (see Example 7). Read Arma 3: Remote Execution for more information
 * about remote execution, security features and JIP techniques.
 * ⓘremoteExec/remoteExecCall can be used in single player as well, as it is
 * considered as player-hosted multiplayer. ⚠The direct execution of call or spawn
 * via remoteExec (or remoteExecCall) should be avoided to prevent issues in cases
 * where the remote execution of call or spawn is blocked by CfgRemoteExec. It is
 * instead recommended to create a function to be itself remote-executed. ⚠The
 * order of persistent remote execution for JIP players is not guaranteed, i.e. the
 * order in which multiple calls are added is not necessarily the order they will
 * be executed for joining player.
 *
 * @param params - order's parameter; Structured Text is not meant to be sent over network
 * @param order - function or command name; only those allowed by CfgRemoteExec will be executed
 * @param targets - (Optional, default 0) target machines for execution
 * @param JIP - (Optional, default false) JIP (Join In Progress) ID or persistence mode
 * @returns return value depends on the JIP parameter *  - error - nil in case of error
 *  - jipId - string with the JIP ID (or "" if JIP is false/empty)
 * @see {@link https://community.bistudio.com/wiki/remoteExec}
 * @sqfsyntaxtype binary
 */
export function remoteExec(params: any, order: string, targets?: number | GameObject | string | Side | Group | Array<any>, JIP?: boolean | string | GameObject | Group | any): [error: null, jipId: string]

/**
 * Removes user added action with given ID. This only removes actions added with
 * the addAction command. You cannot remove default game actions, such as reload.
 *
 * @param unit - unit, vehicle or static object
 * @param actionID - action ID returned by addAction
 * @see {@link https://community.bistudio.com/wiki/removeAction}
 * @sqfsyntaxtype binary
 */
export function removeAction(unit: GameObject, actionID: number): void

/**
 * Removes all unit's user added actions. ⓘThis command's syntax was cunit
 * removeAllActions number from Arma 3 v0.50 to v1.06. ⚠Usage of this command is
 * usually a bad practice unless justified by the situation; removing all actions
 * in order to remove all actions that one added is not a good method as a mod or
 * another script could have added its own actions as well and see them removed.
 * Instead, store the action id returned by addAction either in a script variable
 * or using setVariable.
 *
 * @see {@link https://community.bistudio.com/wiki/removeAllActions}
 * @sqfsyntaxtype unary
 */
export function removeAllActions(obj: GameObject): void

/**
 * Removes weapon from the turret. Use turret path [-1] for driver's turret.
 *
 * @see {@link https://community.bistudio.com/wiki/removeWeaponTurret}
 * @sqfsyntaxtype binary
 */
export function removeWeaponTurret(vehicle: GameObject, weaponName: string, turretPath: TurretPath): void

/**
 * Event Handler Triggered Hit HandleDamage Killed MPKilled Sets the damage (or
 * lack thereof) of an object/unit. The alternative syntax allows to skip
 * destruction effects for vehicles and buildings and set a tree/pole/wall fall
 * direction (away from killer).
 *
 * @param damage - range 0..1, 0 = pristine/healthy condition, 1 = entirely destroyed/killed
 * @see {@link https://community.bistudio.com/wiki/setDamage}
 * @sqfsyntaxtype binary
 */
export function setDamage(object: GameObject, damage: number): void

/**
 * Sets object heading. Angles are measured in degrees clockwise from north; the
 * regular range goes from 0 to 360 (0° = N, 90° = E, 180° = S, 270° = W). Negative
 * angles represent counter-clockwise angles. ⚠This command resets the object's
 * velocity and vectorUp! ⓘIn some earlier titles (Operation Flashpoint?), this
 * command was LELocal.
 *
 * @see {@link https://community.bistudio.com/wiki/setDir}
 * @sqfsyntaxtype binary
 */
export function setDir(object: GameObject, heading: number): void

/**
 * Sets fuel level.
 *
 * @see {@link https://community.bistudio.com/wiki/setFuel}
 * @sqfsyntaxtype binary
 */
export function setFuel(vehicle: GameObject, amount: number): void

/**
 * Changes the ownership of a group (and all its units) to a given client. The
 * group leader must not be a player. This command only works when called from the
 * server. Returns true if locality was changed. For agents use setOwner command.
 *
 * @param clientID - the machine network ID of the new owner.
 * @returns boolean
 * @see {@link https://community.bistudio.com/wiki/setGroupOwner}
 * @sqfsyntaxtype binary
 */
export function setGroupOwner(group: Group, clientID: number): boolean

/**
 * Sets the current level of damage for a specific Hit Point. All hit points can be
 * obtained with getAllHitPointsDamage command.
 *
 * @param vehicle - vehicle to be damaged
 * @param hitPartIndex - hit part index of the Hit Point
 * @param damage - level of damage, 0 = no damage, 1 = full damage
 * @param useEffects - (Optional, default true) false to skip destruction effects
 * @param killer - (Optional, default objNull) the entity that caused the damage. If the damage
 * leads to the death of the unit, the killer will be used as the object that
 * caused the kill.
 * @param instigator - (Optional, default objNull) the person that instigated the damage.
 * @param breakRotor - (Optional, default false) if the hitpoint is rotor on a helicopter, true will
 * break the rotor as well as play corresponding sound if 'useEffects' is also
 * true.
 * @see {@link https://community.bistudio.com/wiki/setHitIndex}
 * @sqfsyntaxtype binary
 */
export function setHitIndex(vehicle: GameObject, hitPartIndex: number, damage: number, useEffects?: boolean, killer?: GameObject, instigator?: GameObject, breakRotor?: boolean): void

/**
 * Applies given texture to object's selection. See also Procedural Textures and
 * Retexturing with setObjectTexture. ⓘ
 * • Not all objects can be textured this way. To find out, run getObjectTextures
 * command on an object. Empty array [] usually indicates it cannot be textured.
 * • All textures must have a resolution of 2a × 2b (e.g. 16×16, 16×32, 64×256,
 * 512×512, ...). The largest texture size supported by the RV engine is 4096×4096.
 * • Supported formats: .pac, .paa, .jpg, .jpeg, .ogg, .ogv
 *
 * @param selection - index of the selection. It is defined in the hiddenSelections array in the
 * vehicle's config (starting with 0). If a string is given, it referes to a
 * hiddenSelection name or clan selection instead of an index.
 * @param texture - path to texture. Since using "#reset" would reset to default texture.
 * @see {@link https://community.bistudio.com/wiki/setObjectTexture}
 * @sqfsyntaxtype binary
 */
export function setObjectTexture(object: GameObject, selection: number | string, texture: string): void

/**
 * Set the texture of the given selection on all computers in a network session. ⓘ
 * • Not all objects can be textured this way. To find out, run getObjectTextures
 * command on an object. Empty array c[] usually indicates it cannot be textured.
 * • All textures must have a resolution of 2a × 2b (e.g. 16×16, 16×32, 64×256,
 * 512×512, ...). The largest texture size supported by the RV engine is 4096×4096.
 * • Supported formats: .pac, .paa, .jpg, .jpeg, .ogg, .ogv
 *
 * @param selection - index of the selection. It is defined in the hiddenSelections array in the
 * vehicle's config (starting with 0). If a string is given, it referes to a
 * hiddenSelection name or clan selection instead of an index.
 * @param texture - path to texture. Since using "#reset" would reset to default texture.
 * @see {@link https://community.bistudio.com/wiki/setObjectTextureGlobal}
 * @sqfsyntaxtype binary
 */
export function setObjectTextureGlobal(object: GameObject, selection: number | string, texture: string): void

/**
 * Sets object position to format PositionAGLS (over surface). The Z value is used
 * to calculate the nearest surface below the provided position. If the surface is
 * close, it uses the Z position of the surface. Otherwise, Z value becomes the
 * offset from that surface. ⚠It is recommended to avoid this command when placing
 * objects above other objects, due to the unpredictable behavior described above.
 *
 * @param pos - if Position2D, Z will be set to 0
 * @see {@link https://community.bistudio.com/wiki/setPos}
 * @sqfsyntaxtype binary
 */
export function setPos(object: GameObject, pos: PositionAGL | any): void

/**
 * Sets the object position above sea level. Given position must be in PositionASL
 * format.
 *
 * @see {@link https://community.bistudio.com/wiki/setPosASL}
 * @sqfsyntaxtype binary
 */
export function setPosASL(object: GameObject, pos: PositionASL): void

/**
 * Adds/overrides loadout to a vehicle pylon. TransportPylonsComponent in vehicle
 * config and pylonWeapon in the magazine config are required to run. ⓘThis command
 * also adds the corresponding weapon if the vehicle does not have one, but will
 * not remove one that is no longer used.
 *
 * @param pylon - pylon index (index starts from 1) or pylon name (see Example 1)
 * @param magazine - magazine name
 * @param forced - (Optional, default false) true to force an incompatible magazine
 * @param turret - (Optional, default []) turret path
 * @returns true on success
 * @see {@link https://community.bistudio.com/wiki/setPylonLoadout}
 * @sqfsyntaxtype binary
 */
export function setPylonLoadout(vehicle: GameObject, pylon: number | string, magazine: string, forced?: boolean, turret?: TurretPath): boolean

/**
 * Creates a sling loading from a helicopter to an entity if possible. To unload
 * cargo, pass objNull as second param. ⓘFROM object has to be a helicoper, alive
 * with rope attachment enabled, TO object has to be an entity, alive with rope
 * attachment enabled.
 *
 * @param heli - the helicopter slinging the load
 * @param cargo - the cargo load entity
 * @returns true on success
 * @see {@link https://community.bistudio.com/wiki/setSlingLoad}
 * @sqfsyntaxtype binary
 */
export function setSlingLoad(heli: GameObject, cargo: GameObject): boolean

/**
 * Set variable to given value in the variable space of given element. Can be used
 * to broadcast variables over the network. To remove a variable, set it to nil
 * (see Example 5) - note that this does not work on Object and scripted Location
 * namespaces (the variable will be set to nil but will remain listed by
 * allVariables). ⚠missionNamespace, uiNamespace, parsingNamespace and
 * profileNamespace variables cannot be named as commands - e.g missionNamespace
 * setVariable ["west", 123]; conflicts with the west command and will result in a
 * Reserved variable in expression error, west being a scripting command (other
 * namespaces do not have such limitation). See also all available script commands.
 *
 * @param varspace - variable space in which variable can be set
 * @param name - variable name (Identifier)
 * @param value - variable value
 * @param public - (Optional, default false) if true, variable is broadcast globally; if number,
 * set on specific client; if array, set on listed clients
 * @see {@link https://community.bistudio.com/wiki/setVariable}
 * @sqfsyntaxtype binary
 */
export function setVariable(varspace: Namespace | GameObject | Group | Control | Display, name: string, value: any, public?: boolean | number | Array<number>): void

/**
 * Set object's direction vector. Up vector will remain unchanged.
 *
 * @see {@link https://community.bistudio.com/wiki/setVectorDir}
 * @sqfsyntaxtype binary
 */
export function setVectorDir(object: GameObject, vectorDir: [number, number, number]): void

/**
 * Sets how much ammunition (compared to a full state defined by the vehicle type)
 * the vehicle has. Note that the ammo will be added only to local turrets. To
 * check locality of turret use turretLocal.
 *
 * @param value - 0: empty, 1: full
 * @see {@link https://community.bistudio.com/wiki/setVehicleAmmo}
 * @sqfsyntaxtype binary
 */
export function setVehicleAmmo(vehicleName: GameObject, value: number): void

/**
 * The waypoint is done only when the condition is fulfilled. When the waypoint is
 * done, the statement expression is executed. Within the Condition & Statement
 * code string:
 * • this refers to the group leader
 * • thisList refers to the group's units ⚠The Condition code is evaluated on the
 * group owner's machine. When condition returns true, for some strange reason, the
 * condition is evaluated one more time. The OnActivation code is executed
 * globally, a.k.a on every client! See Waypoints.
 *
 * @see {@link https://community.bistudio.com/wiki/setWaypointStatements}
 * @sqfsyntaxtype binary
 */
export function setWaypointStatements(waypoint: Waypoint, condition: string, statement: string): void

/**
 * Sets the waypoint type of given waypoint. More details at Waypoints.
 *
 * @param type - waypoint type. Can be:
 * @see {@link https://community.bistudio.com/wiki/setWaypointType}
 * @sqfsyntaxtype binary
 */
export function setWaypointType(waypoint: Waypoint, type: string): void

/**
 * Returns the side of a unit, vehicle, object or location.
 * • side of a renegade soldier is sideEnemy
 * • side of an empty vehicle is civilian
 * • side of a crewed vehicle is, if present, commander's > gunner's > driver's or
 * > cargo's side, in this order
 * • side of a captive or dead unit is civilian. Use side group _unit to get the
 * underlying side (see Example 2)
 * • you can use playerSide to know the real player's side ⓘConverting a side to
 * string will not always return the side command text: e.g str resistance; //
 * returns "GUER". See Side page to see the return value of all side commands.
 *
 * @returns Side
 * @see {@link https://community.bistudio.com/wiki/side}
 * @sqfsyntaxtype unary
 */
export function side(target: any): Side

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
 * Attempts to sort given array either in ascending (true) or descending (false)
 * order. ⚠This will modify the original array!
 *
 * @param array - array to be sorted, can also be a nested array. All array elements should be one
 * of the following types:
 * @param order - sorting order.
 * @see {@link https://community.bistudio.com/wiki/sort}
 * @sqfsyntaxtype binary
 */
export function sort(array: Array<any>, order: boolean): void

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
 * Converts any value into a string, depending on its type. If an Object has a
 * vehicleVarName, it is returned (see Example 4).
 *
 * @returns if value is a String, double quotes "" will surround it (see Example 3)
 * @see {@link https://community.bistudio.com/wiki/str}
 * @sqfsyntaxtype unary
 */
export function str(value: any): string

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
 * Returns the class name of given target.
 *
 * @returns config class name, or empty string if target does not have a class
 * @see {@link https://community.bistudio.com/wiki/typeOf}
 * @sqfsyntaxtype unary
 */
export function typeOf(target: any): string

/**
 * Returns the global namespace attached to user interface.
 *
 * @returns Namespace
 * @see {@link https://community.bistudio.com/wiki/uiNamespace}
 * @sqfsyntaxtype nullary
 */
export function uiNamespace(): Namespace

/**
 * Unassigns individual unit from a vehicle, usually previously assigned with
 * assignAsXXX command, i.e removes assignedVehicleRole of the unit. If the unit is
 * currently in that vehicle, the group leader will issue an order to disembark.
 * ⓘSee AI Group Vehicle Management for more information.
 *
 * @see {@link https://community.bistudio.com/wiki/unassignVehicle}
 * @sqfsyntaxtype unary
 */
export function unassignVehicle(unitName: GameObject): void

/**
 * Returns an array with all the units in the group or unit's group, or all units
 * belonging to a certain side.
 *
 * @returns if type is a destroyed object, an empty array is returned
 * @see {@link https://community.bistudio.com/wiki/units}
 * @sqfsyntaxtype unary
 */
export function units(type: any | Side): Array<GameObject>

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

/**
 * Suspends execution of scheduled script until the given condition satisfied.
 * • This command will loop and call the code inside {} mostly every frame, depends
 * on complexity of the condition and the overall engine load, until the code
 * returns true
 * • If the very first execution of the code returns true the command will exit
 * immediately, therefore it will not produce any "Suspending not allowed in this
 * context" error when used inside non-scheduled script. For all other uses it must
 * be executed in environment that allows suspension (canSuspend), such as spawned
 * or execVMed code
 * • Avoid doing waitUntil { time > 20 }; and use sleep 20; instead!
 * • If you can, add a sleep to the condition to save some cpu cycles waitUntil {
 * sleep 1; !alive player }; Since Arma 3 v1.94, a condition returning anything
 * other than true or false will result in an appropriate type error.
 *
 * @param condition - the expression that must return a Boolean, true to finish waiting or false to
 * continue waiting
 * @returns the value the condition evaluates to when the wait is over (normally true)
 * @see {@link https://community.bistudio.com/wiki/waitUntil}
 * @sqfsyntaxtype unary
 */
export function waitUntil(condition: Function): any

/**
 * Get provided waypoint's position.
 *
 * @returns PositionAGL
 * @see {@link https://community.bistudio.com/wiki/waypointPosition}
 * @sqfsyntaxtype unary
 */
export function waypointPosition(groupOrUnit: Group | GameObject, index: number): PositionAGL

/**
 * Returns an array of waypoints for the specified unit/group.
 *
 * @returns Array<Waypoint>
 * @see {@link https://community.bistudio.com/wiki/waypoints}
 * @sqfsyntaxtype unary
 */
export function waypoints(groupName: Group | GameObject): Array<Waypoint>

/**
 * Returns all weapons of a given turret. Use turret path [-1] for driver's turret.
 *
 * @returns Array<string>
 * @see {@link https://community.bistudio.com/wiki/weaponsTurret}
 * @sqfsyntaxtype binary
 */
export function weaponsTurret(vehicle: GameObject, turretPath: TurretPath): Array<string>


export namespace bis {
/**
 * Function that counts amount of seats, both for crew and cargo seats.
 *
 * @param classname - classname of vehicle
 * @param includeCargo - true if cargo seats should be included
 * @returns amount of seats in vehicle.
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_crewCount}
 * @sqfsyntaxtype unary
 */
export function crewCount(classname: string, includeCargo: boolean): number

/**
 * Shows dynamic opening credits or any type of text.
 *
 * @param text - text to display
 * @param x - (Optional, default -1) position in x, or array [x, width]
 * @param y - (Optional, default -1) position in y, or array [y, height]
 * @param duration - (Optional, default 4) display duration
 * @param fadeInTime - (Optional, default 1) fade-in time
 * @param deltaY - (Optional, default 0) Y position delta
 * @param rscLayer - (Optional) resource layer
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_dynamicText}
 * @sqfsyntaxtype unary
 */
export function dynamicText(text: string, x?: number | Array<any>, y?: number | Array<any>, duration?: number, fadeInTime?: number, deltaY?: number, rscLayer?: number): void

/**
 * Ends the mission properly for all players in a multiplayer environment. ⓘThis
 * function is somewhat deprecated for custom endings since 1.50 as
 * remote-executing BIS_fnc_endMission allows for more options: Copy["MyEnding",
 * true, 3] remoteExec ["BIS_fnc_endMission", 0, true];
 *
 * @param endType - class name of ending defined in CfgDebriefing. Can be custom or one of
 * dynamically calculated ones:
 * @returns boolean
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_endMissionServer}
 * @sqfsyntaxtype unary
 */
export function endMissionServer(endType: string): boolean

/**
 * This function generates position on a map according to several given parameters
 * (see diagram). Diagram The position pos will be generated inside an area which
 * resides between minDist and maxDist from the given center. If objDist is also
 * specified, the position will be selected objDist away from nearest terrain
 * object. If maxGrad > 0 then the position will be also checked for how flat the
 * area around is within objDist radius. The function can additionally be
 * instructed to generate position specifically on water or land (waterMode) or on
 * a shoreline (shoreMode). The shoreLine param will be ignored if position is not
 * requested specifically on land. Additionally, generated position could be
 * checked against the list of blacklisted positions blacklistPos. If search for
 * suitable position failed, defaultPos position will be used. The format for
 * defaultPos is array with 2 positions: [posOnLand, posOnWater].
 *
 * @param minDist - (Optional, default 0) minimum distance from the center position
 * @param maxDist - (Optional, default -1) maximum distance from the center position. If -1, the
 * world's "safePositionRadius" entry will be used
 * @param objDist - (Optional, default 0) minimum distance from the resulting position to the center
 * of nearest object. Specifying quite large distance here will slow the function
 * and might often fail to find suitable position. Recommended value: 0..10
 * @param waterMode - (Optional, default 0) water mode. Can be one of:
 * @param maxGrad - (Optional, default 0) maximum terrain gradient (hill steepness). A quite small
 * non-zero value could result in failure to find suitable position. Recommended: +
 * @param shoreMode - (Optional, default 0) shore mode. Can be one of:
 * @param blacklistPos - (Optional, default c[]) list of blacklisted areas in format [area1, area2,
 * area3... areaN]. Can be one of:
 * @param defaultPos - (Optional, default c[]) default position when no position is found. Array format
 * is [landPosition, seaPosition], where:
 * @returns in format [x,y] on success. When position cannot be found at all, default map center position is returned, which will be in format [x,y,0]
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_findSafePos}
 * @sqfsyntaxtype unary
 */
export function findSafePos(center?: any, minDist?: number, maxDist?: number, objDist?: number, waterMode?: number, maxGrad?: number, shoreMode?: number, blacklistPos?: Array<any>, defaultPos?: Array<any>): Array<any>

/**
 * Returns the value of the named mission parameter. This function is global and
 * will return selected param value on any PC including JIP. For backward
 * compatibility it also supports "param1" and "param2".
 *
 * @param paramClass - class name of one of Mission Parameters
 * @param defalutValue - (Optional, default 0) default value to return if paramClass does not exist
 * @returns param value
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_getParamValue}
 * @sqfsyntaxtype unary
 */
export function getParamValue(paramClass: string, defalutValue?: number): number

/**
 * Returns the pitch and bank of an object, in degrees. Yaw can be found using the
 * getDir command. Pitch is 0 when the object is level; 90 when pointing straight
 * up; and -90 when pointing straight down. Bank is 0 when level; 90 when the
 * object is rolled to the right, -90 when rolled to the left, and 180 when rolled
 * upside down. ⚠The bank returned by this command is not fully accurate, it can be
 * off by up to 5% or so (depending on pitch) due to an unknown bug.
 *
 * @returns pitch and bank of the object in degrees, format [pitch, bank]
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_getPitchBank}
 * @sqfsyntaxtype unary
 */
export function getPitchBank(object: GameObject): [number, number]

/**
 * Returns a random integer between the two passed numbers (inclusive). The order
 * of parameters doesn't matter: it can be [min, max] or [max, min].
 *
 * @param min - minimum value, included
 * @param max - maximum value, included
 * @returns number
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_randomInt}
 * @sqfsyntaxtype unary
 */
export function randomInt(min: number, max: number): number

/**
 * Returns a position that is a specified distance and compass direction from the
 * passed position or object. In Arma 3 use getPos' alternative syntax instead.
 *
 * @param origin - object or position which should be used as initial point.
 * @param distance - distance from initial point
 * @param direction - direction from the intial position
 * @returns PositionAGL
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_relPos}
 * @sqfsyntaxtype unary
 */
export function relPos(origin: GameObject | PositionAGL, distance: number, direction: number): PositionAGL

/**
 * Returns list of all parent classes.
 *
 * @param config - starting config class
 * @param onlyClassNames - (Optional, default false) true to return only class names
 * @returns list of all classes (including starting one)
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_returnParents}
 * @sqfsyntaxtype unary
 */
export function returnParents(config: any, onlyClassNames?: boolean): Array<any>

/**
 * Function to spawn a certain vehicle type with all crew (including turrets). The
 * vehicle can either become part of an existing group or create a new group.
 * ⚠Before Arma 3 (Arma 2, Take On Helicopters):
 * • a Functions Module must be placed in order to use this function
 * • a side's center has to exist (by already having a unit of said side on the
 * map)/be created via createCenter or the vehicle will spawn empty.
 *
 * @param position - desired position
 * @param direction - desired azimuth/direction
 * @param type - type of the vehicle
 * @param sideOrGroup - side or existing group
 * @returns any
 * @see {@link https://community.bistudio.com/wiki/BIS_fnc_spawnVehicle}
 * @sqfsyntaxtype unary
 */
export function spawnVehicle(position: any, direction: number, type: string, sideOrGroup: Side | Group): any

}
