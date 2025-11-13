import { ViewletCommand } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getCss } from '../GetCss/GetCss.ts'
import { getScrollBarSize } from '../GetScrollBarSize/GetScrollBarSize.ts'

export const renderCss = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const {
    uid,
    minLineY,
    itemHeight,
    height,
    finalDeltaY,
    items,
    searchHeaderHeight,
    columnWidth0,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    resizerOneLeft,
    resizerTwoLeft,
    tableHeaderHeight,
    scrollBarHeight,
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
  )
  return [ViewletCommand.SetCss, uid, css]
}
