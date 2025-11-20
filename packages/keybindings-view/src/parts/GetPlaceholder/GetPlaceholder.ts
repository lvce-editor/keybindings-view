import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'

export const getPlaceholder = (isRecordingKeys: boolean): string => {
  if (isRecordingKeys) {
    return KeyBindingStrings.recordingKeysPressEscapeToExit()
  }
  return KeyBindingStrings.typeToSearchKeyBindings()
}
