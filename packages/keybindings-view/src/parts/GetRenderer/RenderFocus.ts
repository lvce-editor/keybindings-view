import { ViewletCommand } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputName from '../InputName/InputName.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

const getSelector = (focus: number): string => {
  switch (focus) {
    case WhenExpression.FocusKeyBindingsWhenExpression:
      return `[name="${InputName.WhenExpression}"]`
    default:
      return `[name="${InputName.KeyBindingsFilter}"]`
  }
}

export const renderFocus = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid, focus } = newState
  const selector = getSelector(focus)
  return [ViewletCommand.FocusSelector, uid, selector]
}
