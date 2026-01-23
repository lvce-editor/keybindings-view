import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getNewDeltaPercent } from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const handleScrollBarPointerMove = (state: KeyBindingsState, clientY: number): KeyBindingsState => {
  const { finalDeltaY, height, scrollBarHeight, scrollBarPointerDown } = state
  
  if (!scrollBarPointerDown || !scrollBarHeight) {
    return state
  }

  const relativeY = clientY - state.y
  const { percent } = getNewDeltaPercent(height, scrollBarHeight, relativeY)
  const newDeltaY = percent * finalDeltaY

  return {
    ...state,
    deltaY: newDeltaY,
  }
}