import * as FilterKeyBinding from '../FilterKeyBinding/FilterKeyBinding.ts'
import * as WithEmptyMatches from '../WithEmptyMatches/WithEmptyMatches.ts'

export const getFilteredKeyBindings = (keyBindings: readonly any[], value: string): readonly any[] => {
  if (!value) {
    return WithEmptyMatches.withEmptyMatches(keyBindings)
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
