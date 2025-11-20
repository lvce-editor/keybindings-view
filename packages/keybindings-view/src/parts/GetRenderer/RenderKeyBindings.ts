import { ViewletCommand } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as GetVisibleKeyBindings from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'

export const renderKeyBindings = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const {
    columnWidth1,
    columnWidth2,
    columnWidth3,
    editingWhenExpression,
    finalDeltaY,
    focusedIndex,
    height,
    isRecordingKeys,
    isSortingByPrecedence,
    itemHeight,
    items,
    maxLineY,
    minLineY,
    placeholder,
    searchHeaderHeight,
    selectedIndex,
    tableHeaderHeight,
    uid,
    value,
  } = newState
  const deltaY = minLineY * itemHeight
  const percent = deltaY / finalDeltaY
  const listHeight = height - tableHeaderHeight - searchHeaderHeight
  const total = items.length
  const contentHeight = total * itemHeight
  const scrollBarThumbHeight = GetScrollBarSize.getScrollBarSize(listHeight, contentHeight, newState.minimumSliderSize)
  const scrollBarThumbTop = (height - scrollBarThumbHeight) * percent
  const hasSelectedItem = selectedIndex !== -1
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
    placeholder,
    hasSelectedItem,
  )
  return [ViewletCommand.SetDom2, uid, tableDom]
}
