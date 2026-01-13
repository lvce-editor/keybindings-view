import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as FocusKey from '../FocusKey/FocusKey.ts'
import { getPlaceholder } from '../GetPlaceholder/GetPlaceholder.ts'
import { getRecordingKeysLabelWidth } from '../GetRecordingKeysLabelWidth/GetRecordingKeysLabelWidth.ts'

export const startRecordingKeys = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const recordingKeysLabelWidth = await getRecordingKeysLabelWidth(true)
  const placeholder = getPlaceholder(true)
  return {
    ...state,
    focus: FocusKey.Input,
    isRecordingKeys: true,
    placeholder,
    recordingKeysLabelWidth,
  }
}
