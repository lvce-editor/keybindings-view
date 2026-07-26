import * as GetKeyModifierPrefix from '../GetKeyModifierPrefix/GetKeyModifierPrefix.ts'

export const filterKeyBindingsByKeyBinding = (keyBindings: readonly any[], value: string): readonly any[] => {
  const exact = value.slice(1, -1).toLowerCase()
  const filteredKeyBindings = []
  for (const keyBinding of keyBindings) {
    const { key } = keyBinding
    const isAlt = Boolean(keyBinding.isAlt)
    const isCtrl = Boolean(keyBinding.isCtrl)
    const isShift = Boolean(keyBinding.isShift)
    const prefix = GetKeyModifierPrefix.getKeyModifierPrefix(isAlt, isCtrl, isShift, false)
    const combinedUnspaced = `${prefix}${key}`
    const combinedSpaced = combinedUnspaced.replaceAll('+', ' + ')
    if (combinedSpaced.toLowerCase() === exact || key.toLowerCase() === exact) {
      filteredKeyBindings.push({
        ...keyBinding,
        commandMatches: [],
        keyMatches: [],
      })
    }
  }
  return filteredKeyBindings
}
