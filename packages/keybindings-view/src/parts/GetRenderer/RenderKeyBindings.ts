import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as GetVisibleKeyBindings from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'

export const renderKeyBindings = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const {
    items,
    minLineY,
    maxLineY,
    selectedIndex,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    finalDeltaY,
    itemHeight,
    height,
    searchHeaderHeight,
    tableHeaderHeight,
    isRecordingKeys,
    value,
    isSortingByPrecedence,
    focusedIndex,
    editingWhenExpression,
  } = newState
  const deltaY = minLineY * itemHeight
  const percent = deltaY / finalDeltaY
  const listHeight = height - tableHeaderHeight - searchHeaderHeight
  const total = items.length
  const contentHeight = total * itemHeight
  const scrollBarThumbHeight = GetScrollBarSize.getScrollBarSize(listHeight, contentHeight, newState.minimumSliderSize)
  const scrollBarThumbTop = (height - scrollBarThumbHeight) * percent

  const displayKeyBindings = GetVisibleKeyBindings.getVisibleKeyBindings(items, minLineY, maxLineY, selectedIndex, editingWhenExpression)
  const hasValue = value.length > 0
  const tableDom = GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom(
    items.length,
    displayKeyBindings,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    scrollBarThumbHeight,
    scrollBarThumbTop,
    isRecordingKeys,
    isSortingByPrecedence,
    hasValue,
    focusedIndex,
    newState.focus,
  )
  return ['Viewlet.setDom2', newState.uid, /* tableDom */ tableDom]
}
