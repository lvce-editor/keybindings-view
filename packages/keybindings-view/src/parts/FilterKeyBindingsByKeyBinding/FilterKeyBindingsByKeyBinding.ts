import * as GetKeyModifierPrefix from '../GetKeyModifierPrefix/GetKeyModifierPrefix.ts'

export const filterKeyBindingsByKeyBinding = (keyBindings: readonly any[], value: string): readonly any[] => {
	const exact = value.slice(1, -1)
	const filteredKeyBindings = []
	for (const keyBinding of keyBindings) {
		const { key } = keyBinding
		const isCtrl = Boolean((keyBinding as any).isCtrl)
		const isShift = Boolean((keyBinding as any).isShift)
		const prefix = GetKeyModifierPrefix.getKeyModifierPrefix(false, isCtrl, isShift, false)
		const combinedUnspaced = `${prefix}${key}`
		const combinedSpaced = combinedUnspaced.replaceAll('+', ' + ')
		if (combinedSpaced === exact || key === exact) {
			filteredKeyBindings.push({
				...keyBinding,
				commandMatches: [],
				keyMatches: [],
			})
		}
	}
	return filteredKeyBindings
}


