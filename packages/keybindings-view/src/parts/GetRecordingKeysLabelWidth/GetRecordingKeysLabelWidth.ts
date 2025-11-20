import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as MeasureTextWidth from '../MeasureTextWidth/MeasureTextWidth.ts'

export const getRecordingKeysLabelWidth = async (isRecordingKeys: boolean): Promise<number> => {
  if (!isRecordingKeys) {
    return 0
  }
  const label = KeyBindingStrings.recordingKeys()
  const fontFamily = 'system-ui, Ubuntu'
  const fontSize = 13
  const fontWeight = 400
  const letterSpacing = 0
  const recordingKeysLabelWidth = await MeasureTextWidth.measureTextWidth(label, fontWeight, fontSize, fontFamily, letterSpacing)
  const rounded = Math.ceil(recordingKeysLabelWidth)
  return rounded
}
