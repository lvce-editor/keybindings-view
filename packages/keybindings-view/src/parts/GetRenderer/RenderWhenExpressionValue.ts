import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderWhenExpressionValue = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const value = 'abc' // TODO
  return ['Viewlet.setValueByName', newState.uid, InputName.WhenExpression, value]
}
