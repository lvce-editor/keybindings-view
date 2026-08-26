import { WhenExpression } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as DefineKeyBindingMode from '../DefineKeyBindingMode/DefineKeyBindingMode.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'
import * as ShowDefineKeyBinding from '../ShowDefineKeyBinding/ShowDefineKeyBinding.ts'

export const handleClickIndex = async (state: KeyBindingsState, index: number, showDefineKeyBinding: boolean): Promise<KeyBindingsState> => {
  const { uid } = state
  const newState = {
    ...state,
    focus: WhenExpression.FocusKeyBindingsTable,
    focusedIndex: index,
    selectedIndex: index,
  }
  if (showDefineKeyBinding) {
    const defineState = {
      ...newState,
      defineKeyBindingsId: DefineKeyBindingMode.Change,
    }
    KeyBindingsStates.set(uid, defineState, defineState)
    await ShowDefineKeyBinding.showDefineKeyBinding(uid)
    return state
  }
  return newState
}
