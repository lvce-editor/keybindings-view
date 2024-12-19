import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const focusLast = (state: KeyBindingsState): KeyBindingsState => {
  const { filteredKeyBindings } = state
  return {
    ...state,
    selectedIndex: filteredKeyBindings.length - 1,
  }
}
