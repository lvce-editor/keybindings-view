import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const clearInput = (state: KeyBindingsState): KeyBindingsState => {
  const newState = HandleInput.handleInput(state, '')
  return {
    ...newState,
    inputSource: InputSource.Script,
  }
}
