import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputName from '../InputName/InputName.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

const getSelector = (focus: number): string => {
  switch (focus) {
    case WhenExpression.FocusKeyBindingsWhenExpression:
      return InputName.WhenExpression
    default:
      return InputName.KeyBindingsFilter
  }
}

export const renderFocus = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid, focus } = newState
  const selector = getSelector(focus)
  return ['Viewlet.focusSelector', uid, selector]
}
