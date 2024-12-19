import * as Assert from '../Assert/Assert.ts'
import * as GetMaxVisibleItems from '../GetMaxVisibleItems/GetMaxVisibleItems.ts'
import * as GetSavedValue from '../GetSavedValue/GetSavedValue.ts'
import * as KeyBindingsInitial from '../KeyBindingsInitial/KeyBindingsInitial.js'
import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const loadContent = async (state: KeyBindingsState, savedState: any) => {
  const { height, rowHeight, width, contentPadding, searchHeaderHeight, tableHeaderHeight } = state
  Assert.number(width)
  const keyBindings = await KeyBindingsInitial.getKeyBindings()
  const parsedKeyBindings = await KeyBindingsViewWorker.invoke('ParseKeyBindings.parseKeyBindings', keyBindings)
  const maxVisibleItems = GetMaxVisibleItems.getMaxVisibleItems(height, searchHeaderHeight, tableHeaderHeight, rowHeight)
  const savedValue = GetSavedValue.getSavedValue(savedState)
  const filteredKeyBindings = await KeyBindingsViewWorker.invoke('FilterKeyBindings.filterKeyBindings', parsedKeyBindings, savedValue)
  const listHeight = height - searchHeaderHeight - tableHeaderHeight
  const contentHeight = 2121
  const scrollBarHeight = ScrollBarFunctions.getScrollBarSize(listHeight, contentHeight, 10)
  const maxLineY = Math.min(filteredKeyBindings.length, maxVisibleItems)
  const finalDeltaY = Math.max(contentHeight - listHeight, 0)
  const contentWidth = width - contentPadding
  const columnWidth1 = contentWidth / 3
  const columnWidth2 = contentWidth / 3
  const columnWidth3 = contentWidth / 3
  const newState = {
    ...state,
    parsedKeyBindings,
    filteredKeyBindings,
    maxLineY,
    maxVisibleItems,
    value: savedValue,
    scrollBarHeight,
    finalDeltaY,
    columnWidth1,
    columnWidth2,
    columnWidth3,
  }
  return newState
}
