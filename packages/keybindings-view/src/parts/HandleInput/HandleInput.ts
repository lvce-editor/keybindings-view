import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'

export const handleInput = (state: KeyBindingsState, value: string): KeyBindingsState => {
  const { parsedKeyBindings, maxVisibleItems } = state
  const filteredKeyBindings = FilterKeyBindings.getFilteredKeyBindings(parsedKeyBindings, value)
  const maxLineY = Math.min(filteredKeyBindings.length, maxVisibleItems)
  return {
    ...state,
    value,
    filteredKeyBindings,
    maxLineY,
  }
}
