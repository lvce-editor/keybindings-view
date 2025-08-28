import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetKeyModifierPrefix from '../GetKeyModifierPrefix/GetKeyModifierPrefix.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const showSameKeyBindings = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const { selectedIndex, items } = state
  const item = items[selectedIndex]
  if (!item) {
    return state
  }
  const { isCtrl, isShift, key } = item
  const prefix = GetKeyModifierPrefix.getKeyModifierPrefix(false, Boolean(isCtrl), Boolean(isShift), false)
  const unspaced = `${prefix}${key}`
  const spaced = unspaced.replaceAll('+', ' + ')
  const value = `"${spaced}"`
  const newState = HandleInput.handleInput(state, value)
  return {
    ...newState,
    inputSource: InputSource.Script,
  }
}
