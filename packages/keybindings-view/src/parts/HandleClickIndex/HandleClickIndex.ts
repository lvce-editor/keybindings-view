import { WhenExpression } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ShowDefineKeyBinding from '../ShowDefineKeyBinding/ShowDefineKeyBinding.ts'

export const handleClickIndex = async (state: KeyBindingsState, index: number, showDefineKeyBinding: boolean): Promise<KeyBindingsState> => {
  if (showDefineKeyBinding) {
    await ShowDefineKeyBinding.showDefineKeyBinding()
  }
  return {
    ...state,
    focusedIndex: index,
    selectedIndex: index,
    focus: WhenExpression.FocusKeyBindingsTable,
  }
}
