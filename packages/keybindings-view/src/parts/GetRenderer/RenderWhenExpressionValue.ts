import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderWhenExpressionValue = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid, whenExpressionText } = newState
  return ['Viewlet.setValueByName', uid, InputName.WhenExpression, whenExpressionText]
}
