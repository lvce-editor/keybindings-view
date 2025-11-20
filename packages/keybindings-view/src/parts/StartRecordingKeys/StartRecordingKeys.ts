import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as MeasureTextWidth from '../MeasureTextWidth/MeasureTextWidth.ts'

export const startRecordingKeys = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const label = KeyBindingStrings.recordingKeys()
  const fontFamily = ''
  const fontSize = 14
  const fontWeight = 500
  const letterSpacing = 0.5
  const recordingKeysLabelWidth = await MeasureTextWidth.measureTextWidth(label, fontWeight, fontSize, fontFamily, letterSpacing)
  return {
    ...state,
    isRecordingKeys: true,
    recordingKeysLabelWidth,
  }
}
