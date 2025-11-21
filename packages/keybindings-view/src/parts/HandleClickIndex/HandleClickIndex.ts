import { WhenExpression } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'
import * as ShowDefineKeyBinding from '../ShowDefineKeyBinding/ShowDefineKeyBinding.ts'

export const handleClickIndex = async (state: KeyBindingsState, index: number, showDefineKeyBinding: boolean): Promise<KeyBindingsState> => {
  const { uid } = state
  const newState = {
    ...state,
    focusedIndex: index,
    selectedIndex: index,
    focus: WhenExpression.FocusKeyBindingsTable,
  }
  if (showDefineKeyBinding) {
    KeyBindingsStates.set(uid, newState, newState)
    await ShowDefineKeyBinding.showDefineKeyBinding()
    return state
  }
  return newState
}
