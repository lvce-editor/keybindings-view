import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const isEqual = (oldState: KeyBindingsState, newState: KeyBindingsState): boolean => {
  return (
    oldState.columnWidth0 === newState.columnWidth0 &&
    oldState.columnWidth1 === newState.columnWidth1 &&
    oldState.columnWidth2 === newState.columnWidth2 &&
    oldState.columnWidth3 === newState.columnWidth3 &&
    oldState.deltaY === newState.deltaY &&
    oldState.recordingKeysLabelWidth === newState.recordingKeysLabelWidth &&
    oldState.scrollBarHeight === newState.scrollBarHeight
  )
}
