import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as StartRecordingKeys from '../StartRecordingKeys/StartRecordingKeys.ts'
import * as StopRecordingKeys from '../StopRecordingKeys/StopRecordingKeys.ts'

export const toggleRecordingKeys = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const { isRecordingKeys } = state
  if (isRecordingKeys) {
    return StopRecordingKeys.stopRecordingKeys(state)
  }
  return StartRecordingKeys.startRecordingKeys(state)
}
