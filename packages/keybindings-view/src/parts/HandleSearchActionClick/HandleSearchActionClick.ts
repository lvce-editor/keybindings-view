import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ClearInput from '../ClearInput/ClearInput.ts'
import * as InputName from '../InputName/InputName.ts'
import * as StartRecordingKeys from '../StartRecordingKeys/StartRecordingKeys.ts'

interface Handler {
  (state: KeyBindingsState): KeyBindingsState
}

const getFn = (name: string): Handler => {
  switch (name) {
    case InputName.ClearSearchInput:
      return ClearInput.clearInput
    case InputName.RecordKeys:
      return StartRecordingKeys.startRecordingKeys
    default:
      throw new Error(`unexpected handler`)
  }
}

export const handleSearchActionClick = (state: KeyBindingsState, name: string): KeyBindingsState => {
  const fn = getFn(name)
  return fn(state)
}
