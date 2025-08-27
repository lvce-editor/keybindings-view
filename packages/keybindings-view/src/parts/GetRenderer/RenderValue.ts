import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const renderValue = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid, value } = newState
  return [/* method */ 'setValue', uid, /* setValue */ value]
}
