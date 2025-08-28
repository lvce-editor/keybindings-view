import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetWhenExpressionText from '../GetWhenExpressionText/GetWhenExpressionText.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const changeWhenExpression = (state: KeyBindingsState): KeyBindingsState => {
  const { items, selectedIndex } = state
  const selectedItem = items[selectedIndex]
  if (!selectedItem) {
    return state
  }
  const text = GetWhenExpressionText.getWhenExpressionText(selectedItem.when)
  return {
    ...state,
    editingWhenExpression: true,
    focus: WhenExpression.FocusKeyBindingsWhenExpression,
    whenExpressionText: text,
  }
}
