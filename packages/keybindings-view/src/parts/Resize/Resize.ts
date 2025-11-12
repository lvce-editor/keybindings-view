import type { Dimensions } from '../Dimensions/Dimensions.ts'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetMaxVisibleItems from '../GetMaxVisibleItems/GetMaxVisibleItems.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const resize = (state: KeyBindingsState, dimensions: Dimensions): KeyBindingsState => {
  const { contentPadding, columnWidth0, items, searchHeaderHeight, tableHeaderHeight, itemHeight, selectedIndex, editingWhenExpression } = state
  const { width, height } = dimensions
  const contentWidth = width - contentPadding
  const columnWidth1 = contentWidth / 3
  const columnWidth2 = contentWidth / 3
  const columnWidth3 = contentWidth / 3
  const resizerOneLeft = columnWidth0 + columnWidth1
  const resizerTwoLeft = columnWidth0 + columnWidth1 + columnWidth2
  const listHeight = height - searchHeaderHeight - tableHeaderHeight
  const contentHeight = items.length * itemHeight
  const scrollBarHeight = ScrollBarFunctions.getScrollBarSize(listHeight, contentHeight, 10)
  const maxVisibleItems = GetMaxVisibleItems.getMaxVisibleItems(height, searchHeaderHeight, tableHeaderHeight, itemHeight)
  const maxLineY = Math.min(items.length, maxVisibleItems)
  const visibleItems = getVisibleKeyBindings(items, 0, maxLineY, selectedIndex, editingWhenExpression)
  return {
    ...state,
    ...dimensions,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    resizerOneLeft,
    resizerTwoLeft,
    scrollBarHeight,
    visibleItems,
  }
}
