import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'

export const cancelEditingWhenExpression = (state: KeyBindingsState): KeyBindingsState => {
  const { items, minLineY, maxLineY, selectedIndex } = state
  const visibleItems = getVisibleKeyBindings(items, minLineY, maxLineY, selectedIndex, true)
  return {
    ...state,
    editingWhenExpression: false,
    visibleItems,
  }
}
