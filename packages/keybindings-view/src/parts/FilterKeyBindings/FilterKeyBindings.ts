import * as FilterKeyBinding from '../FilterKeyBinding/FilterKeyBinding.ts'

const withEmptyMatch = (keyBinding: any): any => {
  return {
    ...keyBinding,
    commandMatches: [],
    keyMatches: [],
  }
}

const withEmptyMatches = (keyBindings: any): any[] => {
  return keyBindings.map(withEmptyMatch)
}

export const getFilteredKeyBindings = (keyBindings: readonly any[], value: string): any[] => {
  if (!value) {
    return withEmptyMatches(keyBindings)
  }
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
