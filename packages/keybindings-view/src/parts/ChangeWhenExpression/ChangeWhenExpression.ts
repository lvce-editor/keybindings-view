import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const changeWhenExpression = (state: KeyBindingsState): KeyBindingsState => {
  return {
    ...state,
    editingWhenExpression: true,
  }
}
