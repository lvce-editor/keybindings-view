import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as Assert from '../Assert/Assert.ts'
import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as GetMaxVisibleItems from '../GetMaxVisibleItems/GetMaxVisibleItems.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import { loadKeyBindings } from '../LoadKeyBindings/LoadKeyBindings.ts'
import * as RestoreState from '../RestoreState/RestoreState.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const loadContent = async (state: KeyBindingsState, savedState: unknown): Promise<KeyBindingsState> => {
  const { height, itemHeight, width, contentPadding, searchHeaderHeight, tableHeaderHeight, editingWhenExpression } = state
  Assert.number(width)
  const parsedKeyBindings = await loadKeyBindings()
  const maxVisibleItems = GetMaxVisibleItems.getMaxVisibleItems(height, searchHeaderHeight, tableHeaderHeight, itemHeight)
  const { savedValue, isRecordingKeys, isSortingByPrecedence, selectedIndex } = RestoreState.restoreState(savedState)
  const filteredKeyBindings = FilterKeyBindings.getFilteredKeyBindings(parsedKeyBindings, savedValue)
  const listHeight = height - searchHeaderHeight - tableHeaderHeight
  const contentHeight = filteredKeyBindings.length * itemHeight
  const scrollBarHeight = ScrollBarFunctions.getScrollBarSize(listHeight, contentHeight, 10)
  const maxLineY = Math.min(filteredKeyBindings.length, maxVisibleItems)
  const finalDeltaY = Math.max(contentHeight - listHeight, 0)
  const contentWidth = width - contentPadding
  const columnWidth0 = 30
  const columnWidth1 = contentWidth / 3
  const columnWidth2 = contentWidth / 3
  const columnWidth3 = contentWidth / 3
  const visibleItems = getVisibleKeyBindings(filteredKeyBindings, 0, maxLineY, selectedIndex, editingWhenExpression)
  return {
    ...state,
    parsedKeyBindings,
    items: filteredKeyBindings,
    maxLineY,
    maxVisibleItems,
    value: savedValue,
    scrollBarHeight,
    finalDeltaY,
    columnWidth0,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    isRecordingKeys,
    isSortingByPrecedence,
    selectedIndex: typeof selectedIndex === 'number' ? selectedIndex : state.selectedIndex,
    visibleItems,
  }
}
