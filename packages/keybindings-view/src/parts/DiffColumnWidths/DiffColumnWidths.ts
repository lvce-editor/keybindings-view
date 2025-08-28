import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const isEqual = (oldState: KeyBindingsState, newState: KeyBindingsState): boolean => {
  return (
    oldState.columnWidth1 === newState.columnWidth1 &&
    oldState.columnWidth2 === newState.columnWidth2 &&
    oldState.columnWidth3 === newState.columnWidth3
  )
}
