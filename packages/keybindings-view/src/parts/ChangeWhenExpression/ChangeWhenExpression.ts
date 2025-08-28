import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const changeWhenExpression = (state: KeyBindingsState): KeyBindingsState => {
  return {
    ...state,
    editingWhenExpression: true,
    focus: WhenExpression.FocusKeyBindingsWhenExpression,
  }
}
