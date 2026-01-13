import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'

export const acceptWhenExpression = (state: KeyBindingsState): KeyBindingsState => {
  const { items, maxLineY, minLineY, selectedIndex } = state
  const visibleItems = getVisibleKeyBindings(items, minLineY, maxLineY, selectedIndex, false)
  return {
    ...state,
    editingWhenExpression: false,
    visibleItems,
  }
}
