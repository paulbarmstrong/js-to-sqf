Please take the data from `scraped-sqf-commands.json` and transform it into another JSON array of this format:

```
[
	{
		name: string,
		url: string,
		syntax: string,
		description?: string,
		paramemters: [
			{
				name: string,
				type: string,
				optional: boolean,
				description?: string,
			}
			...
		]
		returnValue: {
			description?: string,
			type?: string | [
				{
					name?: string,
					type: string,
					description?: string
				}
				...
			]
		}
	},
	...
]
```

Where:
1. You ignore and commands that are in `command-denylist.json`
2. If command description contains `Description needed` then omit it. Otherwise pass it thru
3. Each parameter name is derived from the existing entry's parameter text. Avoid using javascript reserved words like `function`
4. Each parameter type is derived from the existing entry's parameter text, and using the "Type Strategy" below
5. Each parameter's "optional" attribute is derived from the existing entry's parameter text. When in doubt put false
6. Each parameter description is derived from the existing entry's parameter text, and should be omitted if there is no description information. If the parameter type is mixed-type array then no need to go into details about each element here
7. The returnValue's description is derived from the existing entry's returnValue text, and should be omitted if there is no description information. If the returnValue's type is mixed-type array then no need to go into details about each element here
8. The returnValue's type is derived from the existing entry's returnValue text, and using the "Type Strategy" below. If there's nothing returned (usually called "Nothing" in the scraped data) then it can be omitted

Type Strategy:
  1. If this isn't for a mixed-type array returnValue then try and find an appropriate type for it available in the js-to-sqf environment:
	a. string (native ts/js type)
	b. number (native ts/js type)
	c. boolean (native ts/js type)
	d. Array (native ts/js type, both in Array<T> form and tuple form like [string, string, boolean])
	f. Unions (from typescript)
	g. The types under `sqf-data-types.json`
	  * Note that `GameObject` is mean to represent the SQL `Object` data type
	  * Any "script" parameters should have their own pre-existing type in `sqf-data-types.json`, like `AddActionScript`
	h. any (native ts/js type. use this if something tries to specify a huge amount of different types)
  2. If it is a mixed-type array returnValue then have the type be an actual JSON array where elements have:
	a. name as being the a name of the variable, if there's a suitable name for it based on the returnValue text. Otherwise should be omitted. Avoid using javascript reserved words like `function`
	b. type as being the type, using the strategy from #1 to decide the type
	c. description as being a description for that particular element if available. otherwise should be omitted

If there isn't enough information or a proper mapping for a particular type please stop and raise the concern. Otherwise please save it into `enhanced-sqf-commands.json` in the same directory.

Previous claude session ID: baf256fd-a298-4e3c-a516-49fb365d4d10