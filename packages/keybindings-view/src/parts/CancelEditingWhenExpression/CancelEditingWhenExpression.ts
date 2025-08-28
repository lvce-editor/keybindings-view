import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const cancelEditingWhenExpression = (state: KeyBindingsState): KeyBindingsState => {
  return {
    ...state,
    editingWhenExpression: false,
  }
}
