import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const focusNext = (state: KeyBindingsState): KeyBindingsState => {
  const { selectedIndex, items } = state
  return {
    ...state,
    selectedIndex: Math.min(selectedIndex + 1, items.length - 1),
  }
}
