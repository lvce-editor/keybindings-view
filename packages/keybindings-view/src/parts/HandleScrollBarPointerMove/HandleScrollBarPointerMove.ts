import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { setDeltaY } from '../SetDeltaY/SetDeltaY.ts'

export const handleScrollBarPointerMove = (state: KeyBindingsState, clientY: number): KeyBindingsState => {
  const { finalDeltaY, handleOffset, height, scrollBarHeight, scrollBarPointerDown, searchHeaderHeight, tableHeaderHeight, y } = state

  if (!scrollBarPointerDown || !scrollBarHeight || !finalDeltaY) {
    return state
  }

  const trackHeight = Math.max(height - searchHeaderHeight - tableHeaderHeight, 0)
  const relativeY = clientY - y - searchHeaderHeight - tableHeaderHeight - handleOffset
  const maxThumbTop = Math.max(trackHeight - scrollBarHeight, 0)
  const percent = maxThumbTop === 0 ? 0 : Math.min(Math.max(relativeY / maxThumbTop, 0), 1)
  const newDeltaY = percent * finalDeltaY

  return setDeltaY(state, newDeltaY)
}
