import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
export const handleTableBlur = (state: KeyBindingsState): KeyBindingsState => {
  const { tableFocused } = state
  if (!tableFocused) {
    return state
  }
  return {
    ...state,
    tableFocused: false,
  }
}
