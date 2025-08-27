import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: SavedState): SavedState => {
  const { value, isRecordingKeys, isSortingByPrecedence, focus } = state
  return {
    value,
    isRecordingKeys,
    isSortingByPrecedence,
    focus,
  }
}
