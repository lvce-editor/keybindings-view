import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const getIndex = (state: KeyBindingsState, eventX: number, eventY: number): number => {
  const { minLineY, y, rowHeight, tableHeaderHeight, searchHeaderHeight } = state
  const relativeY = eventY - y - tableHeaderHeight - searchHeaderHeight
  const row = Math.floor(relativeY / rowHeight)
  return minLineY + row
}
