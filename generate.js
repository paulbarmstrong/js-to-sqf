import { readFile, writeFile } from "fs/promises"
import { exit } from "process"

const COMMAND_OVERRIDES = {
	"acos": {
		parameters: [
			{name: "x", type: "Number", description: "Number in range -1..+1 - any other value returns NaN"}
		]
	}
}

const singularize = { Numbers: "Number", Strings: "String", Objects: "Object", Booleans: "Boolean", Arrays: "Array" }

const commands = JSON.parse(await readFile("commands.json"))
	.filter(command => !["+", "-"].includes(command.name) && !command.name.includes(" "))

commands.forEach(command => {
	command.parameters = COMMAND_OVERRIDES[command.name]?.parameters ?? command.parameters.map(parameter => {
		const [, name, type, description] = parameter
			.replaceAll(" or 2.10 ", "|")
			.replaceAll("Team Member", "TeamMember")
			.replaceAll(/Array of (\w+)/gi, (_, type) => `Array<${singularize[type] ?? type}>`)
			.match(/^\s*(\w+)\s*:\s*([\w<>|]+)(?:\s*-\s*(.+))?\s*$/)
		return {name, type, description}
	})
})

const output = `declare class GameObject {}

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

${
	commands
		.map(command => {
			const description = command.description.includes("Description needed") ? (
				`Represents the SQF \`${command.name}\` command.`
			) : (
				command.description
			)
			return `/**
${wrapText(description, 80).map(text => ` * ${text}`).join("\n")}
 *
${
	command.parameters.filter(parameter => parameter.description !== undefined).map(parameter => {
		return ` * @param ${parameter.name} - ${parameter.description}`
	})
}
 * @see {@link ${command.url}}
 */
export function ${command.name}(): void
`})
		.join("\n")
}
`

await writeFile("index.d.ts", output)

function wrapText(text, maxWidth) {
	const lines = []

	for (const paragraph of text.split("\n")) {
		const wordList = paragraph.split(/\s+/).filter(Boolean)
		let currentLine = ""

		for (const word of wordList) {
			const candidate = currentLine ? `${currentLine} ${word}` : word

			if (candidate.length > maxWidth) {
				if (currentLine) lines.push(currentLine)
				currentLine = word
			} else {
				currentLine = candidate
			}
		}

		if (currentLine) lines.push(currentLine)
		if (wordList.length === 0) lines.push("") // preserve blank lines
	}

	return lines
}