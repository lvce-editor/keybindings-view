import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const renderValue = (oldState: KeyBindingsState, newState: KeyBindingsState): any => {
  return [/* method */ 'setValue', newState.uid, /* setValue */ newState.value]
}
