import { ViewletCommand } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getCss } from '../GetCss/GetCss.ts'
import { getScrollBarSize } from '../GetScrollBarSize/GetScrollBarSize.ts'

export const renderCss = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const {
    columnWidth0,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    finalDeltaY,
    height,
    itemHeight,
    items,
    recordingKeysLabelWidth,
    resizerOneLeft,
    resizerThreeLeft,
    resizerTwoLeft,
    scrollBarHeight,
    searchHeaderHeight,
    sourceColumnWidth,
    tableHeaderHeight,
    uid,
  } = newState
  const percent = finalDeltaY === 0 ? 0 : newState.deltaY / finalDeltaY
  const listHeight = height - tableHeaderHeight - searchHeaderHeight
  const total = items.length
  const contentHeight = total * itemHeight
  const scrollBarThumbHeight = getScrollBarSize(listHeight, contentHeight, newState.minimumSliderSize)
  const scrollBarThumbTop = (listHeight - scrollBarThumbHeight) * percent
  const css = getCss(
    columnWidth0,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    sourceColumnWidth,
    resizerOneLeft,
    resizerTwoLeft,
    resizerThreeLeft,
    tableHeaderHeight,
    scrollBarHeight,
    scrollBarThumbTop,
    recordingKeysLabelWidth,
  )
  return [ViewletCommand.SetCss, uid, css]
}
