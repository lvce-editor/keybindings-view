import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const focusFirst = (state: KeyBindingsState, index: number): KeyBindingsState => {
  return {
    ...state,
    selectedIndex: index,
    focusedIndex: index,
  }
}
