import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: KeyBindingsState): SavedState => {
  const { value, isRecordingKeys, isSortingByPrecedence, focus, selectedIndex, recordingKeysLabelWidth } = state
  return {
    focus,
    isRecordingKeys,
    isSortingByPrecedence,
    recordingKeysLabelWidth,
    selectedIndex,
    value,
  }
}
