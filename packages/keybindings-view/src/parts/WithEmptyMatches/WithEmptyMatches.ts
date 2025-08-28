import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'

const withEmptyMatch = (keyBinding: ParsedKeyBinding): ParsedKeyBinding => {
  return {
    ...keyBinding,
    commandMatches: [],
    keyMatches: [],
  }
}

export const withEmptyMatches = (keyBindings: readonly ParsedKeyBinding[]): readonly ParsedKeyBinding[] => {
  return keyBindings.map(withEmptyMatch)
}
