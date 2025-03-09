import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as HandleEscape from '../HandleEscape/HandleEscape.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import * as Key from '../Key/Key.ts'

export const handleKeyDown = (state: KeyBindingsState, altKey: boolean, ctrlKey: boolean, key: string): KeyBindingsState => {
  const { isRecordingKeys, value } = state
  if (!isRecordingKeys) {
    return state
  }
  if (key === Key.Escape) {
    return HandleEscape.handleEscape(state)
  }
  return {
    ...state,
    value: `${value} ${key}`,
    inputSource: InputSource.Script,
  }
}
