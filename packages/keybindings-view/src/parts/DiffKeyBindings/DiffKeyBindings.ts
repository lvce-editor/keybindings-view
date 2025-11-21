import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const isEqual = (oldState: KeyBindingsState, newState: KeyBindingsState): boolean => {
  return (
    oldState.editingWhenExpression === newState.editingWhenExpression &&
    oldState.focusedIndex === newState.focusedIndex &&
    oldState.isRecordingKeys === newState.isRecordingKeys &&
    oldState.isRecordingKeys === newState.isRecordingKeys &&
    oldState.isSortingByPrecedence === newState.isSortingByPrecedence &&
    oldState.items === newState.items &&
    oldState.maxLineY === newState.maxLineY &&
    oldState.minLineY === newState.minLineY &&
    oldState.selectedIndex === newState.selectedIndex
  )
}
