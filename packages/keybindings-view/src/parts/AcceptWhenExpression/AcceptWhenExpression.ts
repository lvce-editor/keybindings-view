import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const acceptWhenExpression = (state: KeyBindingsState): KeyBindingsState => {
  return {
    ...state,
    editingWhenExpression: false,
  }
}
