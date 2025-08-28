import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleWhenexpressionInputBlur = (state: KeyBindingsState): KeyBindingsState => {
  return {
    ...state,
    editingWhenExpression: false,
  }
}
