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
	return command.syntaxes.map((syntax, syntaxIndex) => {
		return `/**
${wrapText(command.description ?? `Represents the SQF \`${command.name}\` command.`, 80).map(text => ` * ${text}`).join("\n")}
 *
${
	syntax.parameters.filter(parameter => parameter.description !== undefined).map(parameter => {
		const wrappedDescription = wrapText(parameter.description, 80)
			.map((line, index) => index === 0 ? line : ` * ${line}`)
			.join("\n")
		return ` * @param ${parameter.name} - ${wrappedDescription}\n`
	}).join("")
}${syntax.returnValue.type === undefined ? "" : ` * @returns ${syntax.returnValue.description ?? (typeof syntax.returnValue.type === "string" ? syntax.returnValue.type : "")}${typeof syntax.returnValue.type === "string" ? "" : syntax.returnValue.type.map(returnElement => {
	return ` * ${returnElement.name ? ` - ${returnElement.name}` : ""} - ${returnElement.description ?? returnElement.type}`
}).join("\n")}\n`} * @see {@link ${command.url}}
 * @sqfsyntaxtype ${getCommandSyntaxType(command, syntax)}
 */
export function ${getCommandDisplayName(command, syntaxIndex)}(${
	syntax.parameters.map(parameter => `${parameter.name}${parameter.optional ? "?" : ""}: ${parameter.type}`).join(", ")
}): ${(() => {
		if (syntax.returnValue.type === undefined) {
			return "void"
		} else if (typeof syntax.returnValue.type === "string") {
			return syntax.returnValue.type
		} else {
			return `[${syntax.returnValue.type.map(returnElement => {
				if (returnElement.name !== undefined) {
					return `${returnElement.name}: ${returnElement.type}`
				} else {
					return returnElement.type
				}
			}).join(", ")}]`
		}
	})()}
`
	}).join("\n")
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

function getCommandSyntaxType(command, syntax) {
	if (syntax.syntax === command.name) {
		return "nullary"
	} else if (command.name.includes("_fnc_") || syntax.syntax.startsWith(command.name)) {
		return "unary"
	} else {
		return "binary"
	}
}

function getCommandDisplayName(command, syntaxIndex) {
	const syntaxSuffix = syntaxIndex === 0 ? "" : `V${syntaxIndex+1}`
	const indexOfFnc = command.name.indexOf("_fnc_")
	if (indexOfFnc > -1) {
		return command.name.substring(indexOfFnc + "_fnc_".length) + syntaxSuffix
	} else {
		return command.name + syntaxSuffix
	}
}