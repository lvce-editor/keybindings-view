import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const renderValue = (oldState: KeyBindingsState, newState: KeyBindingsState): any => {
  return [/* method */ 'setValue', /* setValue */ newState.value]
}
