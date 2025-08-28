import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { cancelEditingWhenExpression } from '../CancelEditingWhenExpression/CancelEditingWhenExpression.ts'

export const handleWhenexpressionInputBlur = (state: KeyBindingsState): KeyBindingsState => {
  return cancelEditingWhenExpression(state)
}
