import { WhenExpression } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleTableFocus = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const { focus, tableFocused } = state
  if (focus === WhenExpression.FocusKeyBindingsTable && tableFocused) {
    return state
  }
  return {
    ...state,
    focus: WhenExpression.FocusKeyBindingsTable,
    tableFocused: true,
  }
}
