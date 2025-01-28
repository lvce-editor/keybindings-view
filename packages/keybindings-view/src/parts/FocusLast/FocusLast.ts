import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const focusLast = (state: KeyBindingsState): KeyBindingsState => {
  const { items } = state
  return {
    ...state,
    selectedIndex: items.length - 1,
  }
}
