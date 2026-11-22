import fs from 'node:fs'

// Removes entries from scraped-sqf-commands.json that share a `name` with an
// earlier entry, keeping the first (topmost) occurrence.
const file = new URL('./scraped-sqf-commands.json', import.meta.url)
const commands = JSON.parse(fs.readFileSync(file, 'utf8'))

const seen = new Set()
const deduped = commands.filter(({ name }) => {
	if (seen.has(name)) return false
	seen.add(name)
	return true
})

fs.writeFileSync(file, JSON.stringify(deduped, null, 2) + '\n')
console.log(`Removed ${commands.length - deduped.length} duplicates (${commands.length} -> ${deduped.length})`)
