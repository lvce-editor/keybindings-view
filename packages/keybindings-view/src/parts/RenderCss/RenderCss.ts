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
    minLineY,
    recordingKeysLabelWidth,
    resizerOneLeft,
    resizerTwoLeft,
    scrollBarHeight,
    searchHeaderHeight,
    tableHeaderHeight,
    uid,
  } = newState
  const deltaY = minLineY * itemHeight
  const percent = deltaY / finalDeltaY
  const listHeight = height - tableHeaderHeight - searchHeaderHeight
  const total = items.length
  const contentHeight = total * itemHeight
  const scrollBarThumbHeight = getScrollBarSize(listHeight, contentHeight, newState.minimumSliderSize)
  const scrollBarThumbTop = (height - scrollBarThumbHeight) * percent
  const css = getCss(
    columnWidth0,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    resizerOneLeft,
    resizerTwoLeft,
    tableHeaderHeight,
    scrollBarHeight,
    scrollBarThumbTop,
    recordingKeysLabelWidth,
  )
  return [ViewletCommand.SetCss, uid, css]
}
