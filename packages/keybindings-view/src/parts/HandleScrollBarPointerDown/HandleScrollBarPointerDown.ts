import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'
import { getNewDeltaPercent } from '../ScrollBarFunctions/ScrollBarFunctions.ts'
import { setDeltaY } from '../SetDeltaY/SetDeltaY.ts'

export const handleScrollBarPointerDown = (state: KeyBindingsState, eventX: number, eventY: number): KeyBindingsState => {
  const { deltaY, finalDeltaY, height, scrollBarHeight, searchHeaderHeight, tableHeaderHeight, y } = state
  if (!scrollBarHeight || !finalDeltaY) {
    return state
  }
  const contentHeight = Math.max(height - searchHeaderHeight - tableHeaderHeight, 0)
  const relativeY = eventY - y - searchHeaderHeight - tableHeaderHeight
  const currentScrollBarY = ScrollBarFunctions.getScrollBarY(deltaY, finalDeltaY, contentHeight, scrollBarHeight)
  const diff = relativeY - currentScrollBarY
  if (diff >= 0 && diff < scrollBarHeight) {
    return {
      ...state,
      handleOffset: diff,
      scrollBarPointerDown: true,
    }
  }
  const { handleOffset, percent } = getNewDeltaPercent(contentHeight, scrollBarHeight, relativeY)
  const newDeltaY = percent * finalDeltaY
  return {
    ...setDeltaY(state, newDeltaY),
    handleOffset,
    scrollBarPointerDown: true,
  }
}
