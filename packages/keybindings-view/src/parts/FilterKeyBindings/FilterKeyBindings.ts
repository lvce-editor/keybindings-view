import * as FilterKeyBinding from '../FilterKeyBinding/FilterKeyBinding.ts'
import * as GetKeyModifierPrefix from '../GetKeyModifierPrefix/GetKeyModifierPrefix.ts'
import * as WithEmptyMatches from '../WithEmptyMatches/WithEmptyMatches.ts'

export const getFilteredKeyBindings = (keyBindings: readonly any[], value: string): readonly any[] => {
  if (!value) {
    return WithEmptyMatches.withEmptyMatches(keyBindings)
  }
  // Exact match syntax: quoted string means search for exact keybinding
  const isQuoted = value.length >= 2 && value.startsWith('"') && value.endsWith('"')
  if (isQuoted) {
    return filterKeyBindingsByKeyBinding(keyBindings, value)
  }
  return filterKeyBindingsDefault(keyBindings, value)
}

export const filterKeyBindingsDefault = (keyBindings: readonly any[], value: string): readonly any[] => {
  const filteredKeyBindings = []
  for (const keyBinding of keyBindings) {
    const { command, key } = keyBinding
    const commandMatches = FilterKeyBinding.filterKeyBinding(value, command)
    const keyMatches = FilterKeyBinding.filterKeyBinding(value, key)
    if (commandMatches.length > 0 || keyMatches.length > 0) {
      filteredKeyBindings.push({
        ...keyBinding,
        commandMatches,
        keyMatches,
      })
    }
  }
  return filteredKeyBindings
}

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
