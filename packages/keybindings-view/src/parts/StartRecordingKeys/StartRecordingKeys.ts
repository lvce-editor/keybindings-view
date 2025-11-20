import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getRecordingKeysLabelWidth } from '../GetRecordingKeysLabelWidth/GetRecordingKeysLabelWidth.ts'

export const startRecordingKeys = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const recordingKeysLabelWidth = await getRecordingKeysLabelWidth(true)
  return {
    ...state,
    isRecordingKeys: true,
    recordingKeysLabelWidth,
  }
}
