import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import * as GetWhenExpressionText from '../GetWhenExpressionText/GetWhenExpressionText.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const changeWhenExpression = (state: KeyBindingsState): KeyBindingsState => {
  const { items, maxLineY, minLineY, selectedIndex } = state
  const selectedItem = items[selectedIndex]
  if (!selectedItem) {
    return state
  }
  const text = GetWhenExpressionText.getWhenExpressionText(selectedItem.when)
  const visibleItems = getVisibleKeyBindings(items, minLineY, maxLineY, selectedIndex, true)
  return {
    ...state,
    editingWhenExpression: true,
    focus: WhenExpression.FocusKeyBindingsWhenExpression,
    visibleItems,
    whenExpressionText: text,
  }
}
