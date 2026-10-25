import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as DefineKeyBindingMode from '../DefineKeyBindingMode/DefineKeyBindingMode.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'
import * as ShowDefineKeyBinding from '../ShowDefineKeyBinding/ShowDefineKeyBinding.ts'

export const addKeyBinding = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const { items, selectedIndex, uid } = state
  if (!items[selectedIndex]) {
    return state
  }
  const newState = {
    ...state,
    defineKeyBindingsId: DefineKeyBindingMode.Add,
  }
  KeyBindingsStates.set(uid, newState, newState)
  await ShowDefineKeyBinding.showDefineKeyBinding(uid)
  return state
}
