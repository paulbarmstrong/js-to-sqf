declare class GameObject {}

export interface MissionDefinition {
	init?: () => void
	initServer?: () => void
	initPlayerLocal?: (player: GameObject, didJIP: boolean) => void
}

export function defineMission(def: MissionDefinition): MissionDefinition {
	return def
}

export namespace bis {
	export function crewCount(className: string, includeCargoSeats: boolean): number
}

export namespace diag {
	export function log(output: any): void
}

/**
 * Returns absolute (positive) value of a real number.
 *

 * @see {@link https://community.bistudio.com/wiki/abs}
 */
export function abs(): void

/**
 * Returns the current simulation acceleration factor.
 *

 * @see {@link https://community.bistudio.com/wiki/accTime}
 */
export function accTime(): void

/**
 * ArcCosine of a number, result in Degrees
 *
 * @param x - Number in range -1..+1 - any other value returns NaN
 * @see {@link https://community.bistudio.com/wiki/acos}
 */
export function acos(): void

/**
 * Make a unit perform an action. See Category:Actions for action names and
 * syntaxes. Since Arma 3 2.18 it is possible to use actionNow to perform some
 * actions immediately without any animation. However, note that some actions do
 * require animations (for example, opening inventory while on foot), otherwise
 * they will get cancelled. ⓘ in singleplayer, when user Alt-Tabs the simulation is
 * paused and so the action will also halt until user returns to the game. For
 * example, player action ["GetInDriver", car]; executed while user is Alt-Tabbed
 * will result in the user seeing the action happening when he returns to the game
 * screen. This does not happen in Multiplayer. the alternative syntax creates a
 * temporary Logic entity in place of unit.
 *

 * @see {@link https://community.bistudio.com/wiki/action}
 */
export function action(): void

/**
 * Represents the SQF `actionIDs` command.
 *
 * @param entity - entity with added user actions
 * @see {@link https://community.bistudio.com/wiki/actionIDs}
 */
export function actionIDs(): void

/**
 * Returns Array containing dikCodes of keys, buttons and combos assigned to the
 * given user action. Action names could be found in config class ControllerSchemes
 * or user action names or user profile, for example: keyWatch[] = { 24 }; To
 * retrieve the value, use the property name without 'key': actionKeys "Watch"; //
 * 24 In addition, some of the actions are also listed in here: inputAction/actions
 *

 * @see {@link https://community.bistudio.com/wiki/actionKeys}
 */
export function actionKeys(): void

/**
 * Gives a broken down version of actionKeys return. Returns an Array containing
 * the breakdowns of the dikCodes of keys, buttons and combos assigned to the given
 * user action. Action names can be found in config class ControllerSchemes or user
 * action names or user profile (see Example 1). In addition, some of the actions
 * are also listed here: inputAction/actions The Key Device can be one of several
 * types: "KEYBOARD" "MOUSE_BUTTON" "MOUSE_AXIS" "JOYSTICK_BUTTON" "JOYSTICK_AXIS"
 * "JOYSTICK_POV" "XINPUT" - (Xbox) Controller Input "TRACKER" - Motion Tracking
 * (TrackIR, Tobii etc)
 *
 * @param userAction - user action name (see inputAction/actions)
 * @see {@link https://community.bistudio.com/wiki/actionKeysEx}
 */
export function actionKeysEx(): void

/**
 * Returns a list of button images or names assigned to the given user action. A
 * maximum of maxKeys keys is listed. You can find the action names in the
 * ControllerSchemes config class or user action names.
 *

 * @see {@link https://community.bistudio.com/wiki/actionKeysImages}
 */
export function actionKeysImages(): void

/**
 * Returns a list of button names assigned to the given user action. Action names
 * can be found in config class ControllerSchemes or user action names.
 *

 * @see {@link https://community.bistudio.com/wiki/actionKeysNames}
 */
export function actionKeysNames(): void

/**
 * Returns a list of button names assigned to the given user action. You can find
 * the action names in config class ControllerSchemes or user action names.
 *
 * @param userAction - name of the action
 * @see {@link https://community.bistudio.com/wiki/actionKeysNamesArray}
 */
export function actionKeysNamesArray(): void

/**
 * Returns localized name of action.
 *

 * @see {@link https://community.bistudio.com/wiki/actionName}
 */
export function actionName(): void

/**
 * Make a unit perform an action immediately (without any
 * animation/pre-processing). See the action command for more information.
 *

 * @see {@link https://community.bistudio.com/wiki/actionNow}
 */
export function actionNow(): void

/**
 * Returns Array with params for given user action id (similar to addAction param
 * array).
 *
 * @param entity - entity with added user actions
 * @see {@link https://community.bistudio.com/wiki/actionParams}
 */
export function actionParams(): void

/**
 * Activates the listed addons.
 *

 * @see {@link https://community.bistudio.com/wiki/activateAddons}
 */
export function activateAddons(): void

/**
 * Returns a list of all activated addons.
 *

 * @see {@link https://community.bistudio.com/wiki/activatedAddons}
 */
export function activatedAddons(): void

/**
 * Activates the given keyname for the current user profile. The keys are used to
 * unlock missions or campaigns. See keys, keysLimit and doneKeys in the
 * Description.ext#Mission Keys chapter.
 *

 * @see {@link https://community.bistudio.com/wiki/activateKey}
 */
export function activateKey(): void

/**
 * Returns type, effect, speed and map visibility of the given active title effect
 * (see allActiveTitleEffects)
 *
 * @param layer - layer number or -1 (see allActiveTitleEffects)
 * @see {@link https://community.bistudio.com/wiki/activeTitleEffectParams}
 */
export function activeTitleEffectParams(): void

/**
 * Connect entities together. Be aware to select the correct type of Eden Entities
 * for the connection type.
 *
 * @param type - connection class from "Cfg3DEN" >> "Connections": Group RandomStart Sync TriggerOwner WaypointActivation
 * @see {@link https://community.bistudio.com/wiki/add3DENConnection}
 */
export function add3DENConnection(): void

/**
 * Adds an Eden Editor Event Handler.
 *
 * @param type - see Eden Editor Event Handler
 * @see {@link https://community.bistudio.com/wiki/add3DENEventHandler}
 */
export function add3DENEventHandler(): void

/**
 * Adds an editing layer in Eden Editor.
 *
 * @param parentLayerID - ID of the parent layer. No layer will be created when the ID does not point to a layer. Use -1 to create the layer to root.
 * @see {@link https://community.bistudio.com/wiki/add3DENLayer}
 */
export function add3DENLayer(): void

/**
 * Adds an entry to the action menu of an object. The action can only be activated
 * when in proximity to the object and looking at it. Adding an action to the
 * player makes that action available to the player at all times. For event
 * handling of user interaction see inGameUISetEventHandler.
 *
 * @param object - unit, vehicle or static object. No agents!
 * @see {@link https://community.bistudio.com/wiki/addAction}
 */
export function addAction(): void

/**
 * Adds a backpack for a unit. If a unit already has a backpack, the old backpack
 * will be placed on the ground under the unit. Items defined in the backpack's
 * config will be added as well. ⓘClassname list of available backpacks: Arma 2 OA
 * backpacks Arma 3 backpacks - objects starting with "B_", starts with
 * "B_AssaultPack_khk"
 *

 * @see {@link https://community.bistudio.com/wiki/addBackpack}
 */
export function addBackpack(): void

/**
 * Add backpack(s) to the cargo space of vehicle. Classname list of available
 * backpacks is here. For a list of possible backpacks, see: 1.50 Arma 2: Operation
 * Arrowhead: Backpacks 1.00 Arma 3: CfgVehicles Equipment (starting with B_) In
 * Arma 3, arguments for this command are local LALocal. For the global variant,
 * see addBackpackCargoGlobal.
 *
 * @param vehicle - vehicle to add the backpack to
 * @see {@link https://community.bistudio.com/wiki/addBackpackCargo}
 */
export function addBackpackCargo(): void

/**
 * Add backpack(s) to the cargo space of vehicle. ⓘClassname list of available
 * backpacks: Arma 2:OA backpacks Arma 3 backpacks - objects starting with "B_",
 * starts near "B_AssaultPack_khk"
 *
 * @param vehicle - object to add the Backpack to
 * @see {@link https://community.bistudio.com/wiki/addBackpackCargoGlobal}
 */
export function addBackpackCargoGlobal(): void

/**
 * Adds a backpack to a unit - global variant of addBackpack. ⚠The backpack added
 * with this command will be created on the PC local to the unit you are adding it
 * to, even if executed on the server. Because of this, if non-local unit is the
 * target and one tries to immediately access added backpack, the backpack returned
 * will be null. When adding backpack dynamically to a remote unit, wait until the
 * backpack is added (See Example 2).
 *
 * @param unit - soldier
 * @see {@link https://community.bistudio.com/wiki/addBackpackGlobal}
 */
export function addBackpackGlobal(): void

/**
 * Adds weapon item, including magazine, directly to the binocular weapon. This is
 * used for infantry weapons.
 *

 * @see {@link https://community.bistudio.com/wiki/addBinocularItem}
 */
export function addBinocularItem(): void

/**
 * Creates the camera shaking effect, like when you are near an explosion
 *
 * @param power - strength of shake (camera movement), practical range is 0 to 20
 * @see {@link https://community.bistudio.com/wiki/addCamShake}
 */
export function addCamShake(): void

/**
 * Allow curator use of given addon.
 *
 * @param curatorObj - curator module.
 * @see {@link https://community.bistudio.com/wiki/addCuratorAddons}
 */
export function addCuratorAddons(): void

/**
 * Adds or changes curator camera area (depends on if ID is already used).
 *
 * @param curatorObj - curator module.
 * @see {@link https://community.bistudio.com/wiki/addCuratorCameraArea}
 */
export function addCuratorCameraArea(): void

/**
 * Register objects which can be edited by a curator.
 *
 * @param curatorObj - curator module
 * @see {@link https://community.bistudio.com/wiki/addCuratorEditableObjects}
 */
export function addCuratorEditableObjects(): void

/**
 * Adds or changes curator edit area (depends on if ID is already used).
 *
 * @param curatorObj - curator module.
 * @see {@link https://community.bistudio.com/wiki/addCuratorEditingArea}
 */
export function addCuratorEditingArea(): void

/**
 * Adds or removes curator points.
 *
 * @param curatorObj - curator module.
 * @see {@link https://community.bistudio.com/wiki/addCuratorPoints}
 */
export function addCuratorPoints(): void

/**
 * Add items to the selected curator items.
 *
 * @param items - items to add; items can be an Object, Group, Waypoint, or String (marker)
 * @see {@link https://community.bistudio.com/wiki/addCuratorSelected}
 */
export function addCuratorSelected(): void

/**
 * Add an object to the editor and assign arguments. Create script is,called with
 * _new equal to true. Returns the ID of the new EditorObject.,Subtype class is
 * optional. ⓘSome Old Editor Command
 *

 * @see {@link https://community.bistudio.com/wiki/addEditorObject}
 */
export function addEditorObject(): void

/**
 * Adds an Event Handler to the given object. As many Event Handlers of any type
 * can be added - existing Event Handlers do not get overwritten Use
 * removeEventHandler to remove an Event Handler Read Event Handlers for more
 * information and a list of all available Event Handlers.
 *

 * @see {@link https://community.bistudio.com/wiki/addEventHandler}
 */
export function addEventHandler(): void

/**
 * Applies given force for one frame (essentially an impulse) to unit or given
 * PhysX object at given position. ⓘFor more information see NVIDIA docs.
 *
 * @param object - PhysX object or 2.04LALocal unit, in which case the unit must be local and will be set unconscious
 * @see {@link https://community.bistudio.com/wiki/addForce}
 */
export function addForce(): void

/**
 * Adds force generator to world. For this command to have any effect, the Advanced
 * Flight Model (AFM) has to be enabled. AFM status can be checked with
 * difficultyEnabledRTD.
 *

 * @see {@link https://community.bistudio.com/wiki/addForceGeneratorRTD}
 */
export function addForceGeneratorRTD(): void

/**
 * Create a new item and try to link it into goggles (glasses) slot. ⓘThis command
 * does not add NVGs, which are hmd slot items (see linkItem instead).
 *

 * @see {@link https://community.bistudio.com/wiki/addGoggles}
 */
export function addGoggles(): void

/**
 * Adds icon to a group leader. Returns icon ID, Control icons visibility with
 * setGroupIconsVisible. Since Arma 3 v2.22 the offset can be set separately for 2d
 * and 3d.
 *
 * @param group - group to which add the icon
 * @see {@link https://community.bistudio.com/wiki/addGroupIcon}
 */
export function addGroupIcon(): void

/**
 * Adds weapon item, including magazine, directly to the handgunWeapon. This is
 * used for infantry weapons.
 *

 * @see {@link https://community.bistudio.com/wiki/addHandgunItem}
 */
export function addHandgunItem(): void

/**
 * Creates a headgear item and tries to link it to headgear slot. If slot is
 * occupied with another item, the item in the slot will be replaced.
 *

 * @see {@link https://community.bistudio.com/wiki/addHeadgear}
 */
export function addHeadgear(): void

/**
 * Creates new item and tries to add it into inventory. Inventory must have enough
 * space to accomodate new item or command will fail.The item can also be a weapon
 * or a magazine.
 *

 * @see {@link https://community.bistudio.com/wiki/addItem}
 */
export function addItem(): void

/**
 * Creates new items and stores them in given container. Works with items, weapons,
 * magazines, equipment and glasses but not backpacks. In the latter case use
 * addBackpackCargo instead. For the global variant, see addItemCargoGlobal.
 *

 * @see {@link https://community.bistudio.com/wiki/addItemCargo}
 */
export function addItemCargo(): void

/**
 * Global variant of addItemCargo.
 *

 * @see {@link https://community.bistudio.com/wiki/addItemCargoGlobal}
 */
export function addItemCargoGlobal(): void

/**
 * Adds count items of type name into the weapon pool (used in the campaign to
 * transfer items to the next mission)
 *
 * @param itemName - item name
 * @see {@link https://community.bistudio.com/wiki/addItemPool}
 */
export function addItemPool(): void

/**
 * Create new item and store it to soldier's backpack. The item can also be a
 * weapon or a magazine.
 *

 * @see {@link https://community.bistudio.com/wiki/addItemToBackpack}
 */
export function addItemToBackpack(): void

/**
 * Create new item and store it to soldier's uniform. The item can also be a weapon
 * or a magazine.
 *

 * @see {@link https://community.bistudio.com/wiki/addItemToUniform}
 */
export function addItemToUniform(): void

/**
 * Create new item and store it to soldier's vest. The item can also be a weapon or
 * a magazine.
 *

 * @see {@link https://community.bistudio.com/wiki/addItemToVest}
 */
export function addItemToVest(): void

/**
 * Adds score to the Xbox Live Statistics score for the given unit (or the
 * commander unit of the given vehicle).
 *

 * @see {@link https://community.bistudio.com/wiki/addLiveStats}
 */
export function addLiveStats(): void

/**
 * Adds a magazine to a person. Infantry units can only carry a specific number of
 * magazines, once the magazine slots are filled (or uniform/vest/bagpack are full
 * in Arma 3), any further addMagazine commands are ignored. If class of magazine
 * does not exist, an error message is printed in .rpt: player addMagazine
 * "dasdsa"; // .rpt: Given magazine[dasdsa] not found ⓘUse addMagazine before
 * addWeapon for the weapon to be loaded with the magazine automatically.
 *
 * @param unitName - person to add the magazines to
 * @see {@link https://community.bistudio.com/wiki/addMagazine}
 */
export function addMagazine(): void

/**
 * Adds magazines with specified ammo count to the cargo space of a vehicle or a
 * container.
 *
 * @param cargospace - vehicle or container or weaponholder
 * @see {@link https://community.bistudio.com/wiki/addMagazineAmmoCargo}
 */
export function addMagazineAmmoCargo(): void

/**
 * Add magazines to the cargo space of vehicles, which can be taken out by infantry
 * units. Once the magazine cargo space is filled up, any further addMagazineCargo
 * commands are ignored. In Arma 3, arguments for this command must be local
 * (LALocal). For the global variant see addMagazineCargoGlobal.
 *
 * @param vehicleName - vehicle to add the magazines to
 * @see {@link https://community.bistudio.com/wiki/addMagazineCargo}
 */
export function addMagazineCargo(): void

/**
 * Add magazines to the cargo space of vehicles, which can be taken out by infantry
 * units. MP Synchronized
 *
 * @param vehicleName - vehicle to add the magazines to
 * @see {@link https://community.bistudio.com/wiki/addMagazineCargoGlobal}
 */
export function addMagazineCargoGlobal(): void

/**
 * Adds magazine to a unit regardless of locality. This command can also be used to
 * add magazine to a vehicle, like a static gun, for example.
 *

 * @see {@link https://community.bistudio.com/wiki/addMagazineGlobal}
 */
export function addMagazineGlobal(): void

/**
 * Adds magazines to the magazine pool, of which the player may choose in the
 * following mission. Available in campaigns only.
 *
 * @param magazineName - magazine class name. See the topic Category:Weapons for reference about possible values.
 * @see {@link https://community.bistudio.com/wiki/addMagazinePool}
 */
export function addMagazinePool(): void

/**
 * Adds multiple magazines to the unit. For cargo containers use
 * addMagazineCargoGlobal command. ⓘThis command is meant to be used on human
 * units. If used on vehicles, this command is LALocal GEGlobal.
 *
 * @param unit - a soldier
 * @see {@link https://community.bistudio.com/wiki/addMagazines}
 */
export function addMagazines(): void

/**
 * Adds given number of a magazine to the given turret. Use turret path [-1] for
 * driver's turret.
 *

 * @see {@link https://community.bistudio.com/wiki/addMagazinesTurret}
 */
export function addMagazinesTurret(): void

/**
 * Adds a magazine to the turret. Use turret path [-1] for driver's turret.
 * ⚠Invalid combinations may be created by using this command, for example by
 * adding 20 grenades. In these cases, behaviour is undefined.
 *

 * @see {@link https://community.bistudio.com/wiki/addMagazineTurret}
 */
export function addMagazineTurret(): void

/**
 * Adds a new menu button. Priority is optional. ⓘSome Old Editor Command
 *

 * @see {@link https://community.bistudio.com/wiki/addMenu}
 */
export function addMenu(): void

/**
 * Creates a new menu item. Menu can be "file" or "view",index is index,as returned
 * from addMenu command. priority is optional and determines,where in the menu the
 * item will reside (higher priority items first). ⓘSome Old Editor Command
 *

 * @see {@link https://community.bistudio.com/wiki/addMenuItem}
 */
export function addMenuItem(): void

/**
 * Adds event handler attached to the current mission and returns event handler
 * handle. For the list of available mission event handlers see: Arma 3: Mission
 * Event Handlers
 *
 * @param event - event name
 * @see {@link https://community.bistudio.com/wiki/addMissionEventHandler}
 */
export function addMissionEventHandler(): void

/**
 * Adds a multiplayer event handler (EH) to the given object and returns EH handle.
 * See Event Handlers. ⚠A Multiplayer Event Handler is not saved in a save file and
 * therefore will not be restored on load - use it accordingly.
 *
 * @param object - object to monitor
 * @see {@link https://community.bistudio.com/wiki/addMPEventHandler}
 */
export function addMPEventHandler(): void

/**
 * Adds playMusic event handler. Returns id of the handler or -1 when failed. Like
 * addMissionEventHandler, the music event handler is attached to the mission. See
 * Arma 3: Event Handlers - Music Event Handlers.
 *
 * @param type - "MusicStart" or "MusicStop"
 * @see {@link https://community.bistudio.com/wiki/addMusicEventHandler}
 */
export function addMusicEventHandler(): void

/**
 * Returns a list of files present in the addon. ⓘQuerying protected .ebo addons
 * will return an empty array [].
 *
 * @param prefix - addon prefix available from allAddonsInfo. Since 2.22 it is possible to also return all files present in a scenario folder from within Eden Editor or Eden preview with the special prefix $mission
 * @see {@link https://community.bistudio.com/wiki/addonFiles}
 */
export function addonFiles(): void

/**
 * Sets ownership of a remotely detonatable mine to a unit. If the unit is a
 * player, an action that allows the player to detonate the mine is added to the
 * action menu.
 *

 * @see {@link https://community.bistudio.com/wiki/addOwnedMine}
 */
export function addOwnedMine(): void

/**
 * MP server only: Adds player score. Kill Type infantry soft armor air killed
 * Score Points 1 2 3 5 -1
 *

 * @see {@link https://community.bistudio.com/wiki/addPlayerScores}
 */
export function addPlayerScores(): void

/**
 * Adds weapon item, including magazine, directly to the primaryWeapon. This is
 * used for infantry weapons.
 *

 * @see {@link https://community.bistudio.com/wiki/addPrimaryWeaponItem}
 */
export function addPrimaryWeaponItem(): void

/**
 * This command is deprecated since 1.52 and the introduction of remoteExec and
 * remoteExecCall. This event handler will detect if a missionNamespace variable
 * (it is attached to) has been broadcast over network with publicVariable,
 * publicVariableClient or publicVariableServer commands and will execute EH code
 * upon detection. ⓘ This EH works only in Multiplayer environment There is no way
 * to remove this EH This EH will not fire on the machine that executed broadcast
 * with publicVariable command, only on the machines that receive the broadcast The
 * value of broadcast variable can be exactly the same, it is the actual broadcast
 * that triggers EH not the change in variable
 *
 * @param varName - missionNamespace variable name
 * @see {@link https://community.bistudio.com/wiki/addPublicVariableEventHandler}
 */
export function addPublicVariableEventHandler(): void

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
 */
export function addRating(): void

/**
 * Adds resources to a team member.
 *

 * @see {@link https://community.bistudio.com/wiki/addResources}
 */
export function addResources(): void

/**
 * Adds a number to the score of a unit. Negative values will remove from the
 * score.
 *

 * @see {@link https://community.bistudio.com/wiki/addScore}
 */
export function addScore(): void

/**
 * Adds side score. This is shown in the MP score tab as the total score. MP only.
 *

 * @see {@link https://community.bistudio.com/wiki/addScoreSide}
 */
export function addScoreSide(): void

/**
 * Adds weapon item, including magazine, directly to the secondaryWeapon. This is
 * used for infantry weapons.
 *

 * @see {@link https://community.bistudio.com/wiki/addSecondaryWeaponItem}
 */
export function addSecondaryWeaponItem(): void

/**
 * Adds a unit to the list of units available for Team Switch. Units marked as
 * playable in editor are automatically switchable. This command adds non-playable
 * unit into array of switchableUnits and makes them available for teamSwitch.
 * Singleplayer only!
 *

 * @see {@link https://community.bistudio.com/wiki/addSwitchableUnit}
 */
export function addSwitchableUnit(): void

/**
 * Add given member to given team. Effect is local, unless both member and team are
 * local to PC on which command is executed, then effect is global. The same Team
 * Member can be member of several different teams at the same time.
 *

 * @see {@link https://community.bistudio.com/wiki/addTeamMember}
 */
export function addTeamMember(): void

/**
 * Adds an array of vehicles/units to disposal manager for automatic wreck/body
 * removal. The disposal manager follows wreck/body removal values set in
 * description.ext
 *
 * @param remains - Array<vehicles>/units
 * @see {@link https://community.bistudio.com/wiki/addToRemainsCollector}
 */
export function addToRemainsCollector(): void

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
 * @see {@link https://community.bistudio.com/wiki/addTorque}
 */
export function addTorque(): void

/**
 * Create a new uniform and try to link it into uniform slot (given uniform has to
 * be supported by allowedUniforms list of target soldier). ⓘTo check if a uniform
 * is allowed use isUniformAllowed, and to force an incompatible uniform use
 * forceAddUniform.
 *

 * @see {@link https://community.bistudio.com/wiki/addUniform}
 */
export function addUniform(): void

/**
 * Adds a user action event handler to the current mission and returns its event
 * handler index.
 *
 * @param keyName - action key name - see inputAction/actions
 * @see {@link https://community.bistudio.com/wiki/addUserActionEventHandler}
 */
export function addUserActionEventHandler(): void

/**
 * Adds a specified vehicle for use by a specified AI led group. ⓘSee AI Group
 * Vehicle Management for more information.
 *

 * @see {@link https://community.bistudio.com/wiki/addVehicle}
 */
export function addVehicle(): void

/**
 * Create a new vest and try to link it into vest slot.
 *

 * @see {@link https://community.bistudio.com/wiki/addVest}
 */
export function addVest(): void

/**
 * Adds (or inserts when index is given) a new waypoint to a group. The waypoint is
 * placed randomly within a circle with the given center and radius. ⓘFor older
 * titles and prior to Arma 3 v1.90, use setWaypointPosition if you need exact
 * waypoint placement.
 *

 * @see {@link https://community.bistudio.com/wiki/addWaypoint}
 */
export function addWaypoint(): void

