import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const handleInput = (state: KeyBindingsState, value: string): KeyBindingsState => {
  const { parsedKeyBindings, maxVisibleItems } = state
  const items = FilterKeyBindings.getFilteredKeyBindings(parsedKeyBindings, value)
  const maxLineY = Math.min(items.length, maxVisibleItems)
  return {
    ...state,
    value,
    items,
    maxLineY,
    inputSource: InputSource.User,
  }
}
