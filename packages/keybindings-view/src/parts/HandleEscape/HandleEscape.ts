import { WhenExpression } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as StopRecordingKeys from '../StopRecordingKeys/StopRecordingKeys.ts'

export const handleEscape = (state: KeyBindingsState): KeyBindingsState => {
  const { isRecordingKeys } = state
  if (isRecordingKeys) {
    return StopRecordingKeys.stopRecordingKeys(state)
  }
  return {
    ...state,
    focus: WhenExpression.FocusKeyBindingsTable,
    focusedIndex: -1,
  }
}
