import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'

export const getPlaceholder = (isRecordingKeys: boolean): string => {
  if (isRecordingKeys) {
    return '' // TODO
  }
  return KeyBindingStrings.typeToSearchKeyBindings()
}
