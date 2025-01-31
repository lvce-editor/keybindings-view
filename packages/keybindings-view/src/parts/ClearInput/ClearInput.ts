import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'

export const clearInput = (state: KeyBindingsState): KeyBindingsState => {
  return HandleInput.handleInput(state, '')
}
