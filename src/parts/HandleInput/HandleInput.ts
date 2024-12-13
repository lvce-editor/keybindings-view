import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

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
