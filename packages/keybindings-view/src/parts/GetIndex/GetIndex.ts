import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const getIndex = (state: KeyBindingsState, eventX: number, eventY: number): number => {
  const { minLineY, y, itemHeight, tableHeaderHeight, searchHeaderHeight, items } = state
  const relativeY = eventY - y - tableHeaderHeight - searchHeaderHeight
  const row = Math.floor(relativeY / itemHeight)
  const actualRow = minLineY + row
  if (actualRow > items.length) {
    return -1
  }
  return actualRow
}
