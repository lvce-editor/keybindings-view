import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const focusPrevious = (state: KeyBindingsState): KeyBindingsState => {
  const { selectedIndex } = state
  return {
    ...state,
    selectedIndex: Math.max(selectedIndex - 1, 0),
  }
}
