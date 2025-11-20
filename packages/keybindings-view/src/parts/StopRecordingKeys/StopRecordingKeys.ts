import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getPlaceholder } from '../GetPlaceholder/GetPlaceholder.ts'

export const stopRecordingKeys = (state: KeyBindingsState): KeyBindingsState => {
  const placeholder = getPlaceholder(false)
  return {
    ...state,
    isRecordingKeys: false,
    placeholder,
  }
}
