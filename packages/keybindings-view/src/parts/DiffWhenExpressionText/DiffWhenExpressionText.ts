import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const isEqual = (oldState: KeyBindingsState, newState: KeyBindingsState): boolean => {
  return oldState.editingWhenExpression === true || newState.editingWhenExpression === false
}
