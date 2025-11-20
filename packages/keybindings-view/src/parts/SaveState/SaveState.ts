import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: KeyBindingsState): SavedState => {
  const { focus, isRecordingKeys, isSortingByPrecedence, recordingKeysLabelWidth, selectedIndex, value } = state
  return {
    focus,
    isRecordingKeys,
    isSortingByPrecedence,
    recordingKeysLabelWidth,
    selectedIndex,
    value,
  }
}
