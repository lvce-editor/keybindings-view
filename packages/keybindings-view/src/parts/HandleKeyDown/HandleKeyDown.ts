import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetKeyBindingsString from '../GetKeyBindingsString/GetKeyBindingsString.ts'
import * as HandleEscape from '../HandleEscape/HandleEscape.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import * as Key from '../Key/Key.ts'

export const handleKeyDown = (state: KeyBindingsState, altKey: boolean, ctrlKey: boolean, shiftKey: boolean, key: string): KeyBindingsState => {
  const { isRecordingKeys, value } = state
  if (!isRecordingKeys) {
    return state
  }
  if (key === Key.Escape) {
    return HandleEscape.handleEscape(state)
  }
  const keyBinding = GetKeyBindingsString.getKeyBindingString(key, altKey, ctrlKey, shiftKey, false)
  const newValue = value ? `${value} ${keyBinding}` : keyBinding
  const newState = HandleInput.handleInput(state, newValue)
  return {
    ...newState,
    inputSource: InputSource.Script,
    value: newValue,
  }
}
