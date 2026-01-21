import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as Assert from '../Assert/Assert.ts'
import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as GetMaxVisibleItems from '../GetMaxVisibleItems/GetMaxVisibleItems.ts'
import { getPlaceholder } from '../GetPlaceholder/GetPlaceholder.ts'
import { getRecordingKeysLabelWidth } from '../GetRecordingKeysLabelWidth/GetRecordingKeysLabelWidth.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import { loadKeyBindings } from '../LoadKeyBindings/LoadKeyBindings.ts'
import * as RestoreState from '../RestoreState/RestoreState.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const loadContent = async (state: KeyBindingsState, savedState: unknown): Promise<KeyBindingsState> => {
  const { contentPadding, editingWhenExpression, height, itemHeight, minimumSliderSize, paddingLeft, searchHeaderHeight, tableHeaderHeight, width } =
    state
  Assert.number(width)
  const parsedKeyBindings = await loadKeyBindings()
  const maxVisibleItems = GetMaxVisibleItems.getMaxVisibleItems(height, searchHeaderHeight, tableHeaderHeight, itemHeight)
  const { isRecordingKeys, isSortingByPrecedence, savedValue, selectedIndex } = RestoreState.restoreState(savedState)
  const recordingKeysLabelWidth = await getRecordingKeysLabelWidth(isRecordingKeys)
  const filteredKeyBindings = FilterKeyBindings.getFilteredKeyBindings(parsedKeyBindings, savedValue)
  const listHeight = height - searchHeaderHeight - tableHeaderHeight
  const contentHeight = filteredKeyBindings.length * itemHeight
  const placeholder = getPlaceholder(isRecordingKeys)
  const scrollBarHeight = ScrollBarFunctions.getScrollBarSize(listHeight, contentHeight, minimumSliderSize)
  const maxLineY = Math.min(filteredKeyBindings.length, maxVisibleItems)
  const finalDeltaY = Math.max(contentHeight - listHeight, 0)
  const contentWidth = width - contentPadding
  const columnWidth0 = 30
  const columnWidth1 = contentWidth / 3
  const columnWidth2 = contentWidth / 3
  const columnWidth3 = contentWidth / 3 - columnWidth0
  const visibleItems = getVisibleKeyBindings(filteredKeyBindings, 0, maxLineY, selectedIndex, editingWhenExpression)
  const resizerOneLeft = paddingLeft + columnWidth0 + columnWidth1
  const resizerTwoLeft = resizerOneLeft + columnWidth2
  return {
    ...state,
    columnWidth0,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    finalDeltaY,
    initial: false,
    isRecordingKeys,
    isSortingByPrecedence,
    items: filteredKeyBindings,
    maxLineY,
    maxVisibleItems,
    parsedKeyBindings,
    placeholder,
    recordingKeysLabelWidth,
    resizerOneLeft,
    resizerTwoLeft,
    scrollBarHeight,
    selectedIndex: typeof selectedIndex === 'number' ? selectedIndex : state.selectedIndex,
    value: savedValue,
    visibleItems,
  }
}
