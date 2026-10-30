import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const setDeltaY = (state: KeyBindingsState, deltaY: number): KeyBindingsState => {
  const { editingWhenExpression, height, itemHeight, items, minimumSliderSize, searchHeaderHeight, selectedIndex, tableHeaderHeight } = state
  const listHeight = Math.max(height - searchHeaderHeight - tableHeaderHeight, 0)
  const contentHeight = items.length * itemHeight
  const finalDeltaY = Math.max(contentHeight - listHeight, 0)
  deltaY = Math.min(Math.max(deltaY, 0), finalDeltaY)
  const scrollBarHeight = ScrollBarFunctions.getScrollBarSize(listHeight, contentHeight, minimumSliderSize)
  const minLineY = Math.floor(deltaY / itemHeight)
  const maxLineY = Math.min(items.length, Math.ceil((deltaY + listHeight) / itemHeight))
  const visibleItems = getVisibleKeyBindings(items, minLineY, maxLineY, selectedIndex, editingWhenExpression)
  return {
    ...state,
    deltaY,
    finalDeltaY,
    maxLineY,
    minLineY,
    scrollBarHeight,
    visibleItems,
  }
}
