import type { SavedState } from '../SavedState/SavedState.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

export const saveState = (uid: number): SavedState => {
  if (typeof uid !== 'number') {
    // deprecated
    return {
      value: '',
      isRecordingKeys: false,
      isSortingByPrecedence: false,
      focus: 0,
    }
  }
  const { newState } = KeyBindingsStates.get(uid)
  const { value, isRecordingKeys, isSortingByPrecedence, focus } = newState
  return {
    value,
    isRecordingKeys,
    isSortingByPrecedence,
    focus,
  }
}
