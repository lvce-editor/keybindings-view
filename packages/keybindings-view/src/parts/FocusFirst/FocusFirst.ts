import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const focusFirst = (state: KeyBindingsState): KeyBindingsState => {
  return {
    ...state,
    selectedIndex: 0,
  }
}
