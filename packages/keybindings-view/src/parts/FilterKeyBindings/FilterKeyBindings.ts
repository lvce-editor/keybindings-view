import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import * as FilterKeyBindingsByKeyBinding from '../FilterKeyBindingsByKeyBinding/FilterKeyBindingsByKeyBinding.ts'
import * as FilterKeyBindingsDefault from '../FilterKeyBindingsDefault/FilterKeyBindingsDefault.ts'
import * as WithEmptyMatches from '../WithEmptyMatches/WithEmptyMatches.ts'

export const getFilteredKeyBindings = (keyBindings: readonly ParsedKeyBinding[], value: string): readonly ParsedKeyBinding[] => {
  if (!value) {
    return WithEmptyMatches.withEmptyMatches(keyBindings)
  }
  // Exact match syntax: quoted string means search for exact keybinding
  const isQuoted = value.length >= 2 && value.startsWith('"') && value.endsWith('"')
  if (isQuoted) {
    return FilterKeyBindingsByKeyBinding.filterKeyBindingsByKeyBinding(keyBindings, value)
  }
  return FilterKeyBindingsDefault.filterKeyBindingsDefault(keyBindings, value)
}
