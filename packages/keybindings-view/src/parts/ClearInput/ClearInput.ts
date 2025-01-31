import * as HandleInput from '../HandleInput/HandleInput.ts'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const clearInput = (state: KeyBindingsState): KeyBindingsState => {
  return HandleInput.handleInput(state, '')
}
