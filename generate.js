import { cp } from "fs"
import { readFile, writeFile } from "fs/promises"
import { exit } from "process"

const dataTypes = JSON.parse(await readFile("sqf-data-types.json"))
const commands = JSON.parse(await readFile("enhanced-sqf-commands.json"))

const output = `export interface MissionDefinition {
	init?: () => void
	initServer?: () => void
	initPlayerLocal?: (player: GameObject, didJIP: boolean) => void
}

export function defineMission(def: MissionDefinition): MissionDefinition {
	return def
}

${dataTypes.map(dataType => {
	return `/**
${wrapText(dataType.description, 80).map(text => ` * ${text}`).join("\n")}
 * @see {@link ${dataType.url}}
 */
${dataType.type !== undefined ? `export type ${dataType.name} = ${dataType.type}` : `declare class ${dataType.name} {${
	dataType.classConstructor !== undefined ? `\n\tconstructor${dataType.classConstructor}\n` : ""
}}`}
`
}).join("\n")}
/**
 * Gets a GameObject by the variableName it is configured with in the Mission Editor.
 * 
 * @see {@link https://community.bistudio.com/wiki/Object}
 */
export function getGameObjectByVariableName(variableName: string): GameObject

${
	commands
		.filter(command => !command.name.includes("_fnc_"))
		.map(command => renderCommand(command))
		.join("\n")
}

export namespace bis {
${
	commands
		.filter(command => command.name.startsWith("BIS_fnc_"))
		.map(command => renderCommand(command))
		.join("\n")
}
}
`

await writeFile("index.d.ts", output)

function renderCommand(command) {
	return `/**
${wrapText(command.description ?? `Represents the SQF \`${command.name}\` command.`, 80).map(text => ` * ${text}`).join("\n")}
 *
${
	command.parameters.filter(parameter => parameter.description !== undefined).map(parameter => {
		const wrappedDescription = wrapText(parameter.description, 80)
			.map((line, index) => index === 0 ? line : ` * ${line}`)
			.join("\n")
		return ` * @param ${parameter.name} - ${wrappedDescription}\n`
	}).join("")
}${command.returnValue.type === undefined ? "" : ` * @returns ${command.returnValue.description ?? (typeof command.returnValue.type === "string" ? command.returnValue.type : "")}${typeof command.returnValue.type === "string" ? "" : command.returnValue.type.map(returnElement => {
	return ` * ${returnElement.name ? ` - ${returnElement.name}` : ""} - ${returnElement.description ?? returnElement.type}`
}).join("\n")}\n`} * @see {@link ${command.url}}
 * @sqfsyntaxtype ${getCommandSyntaxType(command)}
 */
export function ${getCommandDisplayName(command)}(${
	command.parameters.map(parameter => `${parameter.name}${parameter.optional ? "?" : ""}: ${parameter.type}`).join(", ")
}): ${(() => {
		if (command.returnValue.type === undefined) {
			return "void"
		} else if (typeof command.returnValue.type === "string") {
			return command.returnValue.type
		} else {
			return `[${command.returnValue.type.map(returnElement => {
				if (returnElement.name !== undefined) {
					return `${returnElement.name}: ${returnElement.type}`
				} else {
					return returnElement.type
				}
			}).join(", ")}]`
		}
	})()}
`
}

function wrapText(text, maxWidth) {
	const lines = []

	for (const paragraph of text.split("\n")) {
		if (paragraph.length <= maxWidth) {
			lines.push(paragraph)
			continue
		}

		const indent = paragraph.match(/^\s*/)[0]
		let remaining = paragraph

		while (remaining.length > maxWidth) {
			const breakAt = remaining.slice(0, maxWidth + 1).lastIndexOf(" ")
			if (breakAt <= indent.length) break
			lines.push(remaining.slice(0, breakAt))
			remaining = indent + remaining.slice(breakAt + 1)
		}

		lines.push(remaining)
	}

	return lines
}

function getCommandSyntaxType(command) {
	if (command.syntax === command.name) {
		return "nullary"
	} else if (command.name.includes("_fnc_") || command.syntax.startsWith(command.name)) {
		return "unary"
	} else {
		return "binary"
	}
}

function getCommandDisplayName(command) {
	const indexOfFnc = command.name.indexOf("_fnc_")
	if (indexOfFnc > -1) {
		return command.name.substring(indexOfFnc + "_fnc_".length)
	} else {
		return command.name
	}
}