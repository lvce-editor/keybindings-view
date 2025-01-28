import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const setDeltaY = (state: KeyBindingsState, deltaY: number): KeyBindingsState => {
  const { maxVisibleItems, itemHeight, filteredKeyBindings } = state
  const tableHeight = maxVisibleItems * itemHeight
  const minDeltaY = 0
  const maxDeltaY = Math.max(filteredKeyBindings.length * itemHeight - tableHeight, 0)
  if (deltaY < minDeltaY) {
    deltaY = minDeltaY
  } else if (deltaY > maxDeltaY) {
    deltaY = Math.max(maxDeltaY)
  }
  const minLineY = Math.floor(deltaY / itemHeight)
  const maxLineY = minLineY + Math.round(tableHeight / itemHeight)
  return {
    ...state,
    deltaY,
    minLineY,
    maxLineY,
  }
}
