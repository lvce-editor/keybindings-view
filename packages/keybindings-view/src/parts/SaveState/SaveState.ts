import type { SavedState } from '../SavedState/SavedState.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

export const saveState = (uid: number): SavedState => {
  if (typeof uid !== 'number') {
    // deprecated
    return {
      value: '',
      isRecordingKeys: false,
    }
  }
  const { newState } = KeyBindingsStates.get(uid)
  const { value, isRecordingKeys } = newState
  return {
    value,
    isRecordingKeys,
  }
}
