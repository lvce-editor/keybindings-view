import { WhenExpression } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleTableFocus = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const { focus } = state
  if (focus === WhenExpression.FocusKeyBindingsTable) {
    return state
  }
  return {
    ...state,
    focus: WhenExpression.FocusKeyBindingsTable,
  }
}
