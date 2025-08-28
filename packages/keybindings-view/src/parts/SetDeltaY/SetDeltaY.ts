import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'

export const setDeltaY = (state: KeyBindingsState, deltaY: number): KeyBindingsState => {
  const { maxVisibleItems, itemHeight, items, editingWhenExpression, selectedIndex } = state
  const tableHeight = maxVisibleItems * itemHeight
  const minDeltaY = 0
  const maxDeltaY = Math.max(items.length * itemHeight - tableHeight, 0)
  if (deltaY < minDeltaY) {
    deltaY = minDeltaY
  } else if (deltaY > maxDeltaY) {
    deltaY = Math.max(maxDeltaY)
  }
  const minLineY = Math.floor(deltaY / itemHeight)
  const maxLineY = minLineY + Math.round(tableHeight / itemHeight)
  const visibleItems = getVisibleKeyBindings(items, minLineY, maxLineY, selectedIndex, editingWhenExpression)
  return {
    ...state,
    deltaY,
    minLineY,
    maxLineY,
    visibleItems,
  }
}
