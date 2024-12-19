import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleResizerMove = (state: KeyBindingsState, eventX: number): KeyBindingsState => {
  const { resizerDownId, contentPadding, width, columnWidth1, columnWidth2, x } = state
  const contentWidth = width - contentPadding
  if (resizerDownId === 1) {
    const newColumnWidth1 = eventX - contentPadding - x
    const newColumnWidth3 = contentWidth - newColumnWidth1 - columnWidth2
    return {
      ...state,
      columnWidth1: newColumnWidth1,
      columnWidth3: newColumnWidth3,
    }
  }
  const newColumnWidth3 = contentWidth - (eventX - contentPadding - x)
  const newColumnWidth2 = contentWidth - newColumnWidth3 - columnWidth1
  return {
    ...state,
    columnWidth2: newColumnWidth2,
    columnWidth3: newColumnWidth3,
  }
}
