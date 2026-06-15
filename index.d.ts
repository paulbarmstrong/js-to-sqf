declare class SqfObject {}

export function deleteVehicle(object: SqfObject): void

export function systemChat(message: string): void

export namespace bis {
	export function crewCount(className: string, includeCargoSeats: boolean): number
}

export namespace diag {
	export function log(output: any): void
}