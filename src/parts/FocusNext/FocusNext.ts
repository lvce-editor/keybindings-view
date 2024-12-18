import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const focusNext = (state: KeyBindingsState): KeyBindingsState => {
  const { selectedIndex, filteredKeyBindings } = state
  return {
    ...state,
    selectedIndex: Math.min(selectedIndex + 1, filteredKeyBindings.length - 1),
  }
}
