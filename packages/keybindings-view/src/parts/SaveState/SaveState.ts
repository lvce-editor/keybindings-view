import type { SavedState } from '../SavedState/SavedState.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

export const saveState = (uid: number): SavedState => {
  if (typeof uid !== 'number') {
    // deprecated
    return {
      value: '',
    }
  }
  const { newState } = KeyBindingsStates.get(uid)
  const { value } = newState
  return {
    value,
  }
}
