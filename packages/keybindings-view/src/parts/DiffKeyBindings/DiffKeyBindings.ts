import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderKeyBindings

export const isEqual = (oldState: KeyBindingsState, newState: KeyBindingsState): boolean => {
  return (
    oldState.items === newState.items &&
    oldState.minLineY === newState.minLineY &&
    oldState.maxLineY === newState.maxLineY &&
    oldState.selectedIndex === newState.selectedIndex &&
    oldState.focusedIndex === newState.focusedIndex &&
    oldState.columnWidth1 === newState.columnWidth1 &&
    oldState.columnWidth2 === newState.columnWidth2 &&
    oldState.columnWidth3 === newState.columnWidth3 &&
    oldState.isRecordingKeys === newState.isRecordingKeys &&
    oldState.isSortingByPrecedence === newState.isSortingByPrecedence
  )
}
