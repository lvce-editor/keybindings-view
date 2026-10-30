import type { Dimensions } from '../Dimensions/Dimensions.ts'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetMaxVisibleItems from '../GetMaxVisibleItems/GetMaxVisibleItems.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'

export const resize = (state: KeyBindingsState, dimensions: Dimensions): KeyBindingsState => {
  const {
    columnWidth0,
    contentPadding,
    deltaY: currentDeltaY,
    finalDeltaY: currentFinalDeltaY,
    itemHeight,
    searchHeaderHeight,
    tableHeaderHeight,
  } = state
  const { height, width } = dimensions
  const contentWidth = width - contentPadding
  const columnWidth1 = contentWidth / 3
  const columnWidth2 = contentWidth / 3
  const columnWidth3 = contentWidth / 3 - columnWidth0
  const sourceColumnWidth = columnWidth3 / 2
  const resizerOneLeft = columnWidth0 + columnWidth1
  const resizerTwoLeft = columnWidth0 + columnWidth1 + columnWidth2
  const resizerThreeLeft = resizerTwoLeft + columnWidth3 - sourceColumnWidth
  const maxVisibleItems = GetMaxVisibleItems.getMaxVisibleItems(height, searchHeaderHeight, tableHeaderHeight, itemHeight)
  const resizedState = {
    ...state,
    ...dimensions,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    maxVisibleItems,
    resizerOneLeft,
    resizerThreeLeft,
    resizerTwoLeft,
    sourceColumnWidth,
  }
  const deltaY = currentFinalDeltaY > 0 && currentDeltaY >= currentFinalDeltaY ? Infinity : currentDeltaY
  return SetDeltaY.setDeltaY(resizedState, deltaY)
}
