import type { SearchActionClickHandler } from '../SearchActionClickHandler/SearchActionClickHandler.ts'
import * as ClearInput from '../ClearInput/ClearInput.ts'
import * as InputName from '../InputName/InputName.ts'
import * as StartRecordingKeys from '../StartRecordingKeys/StartRecordingKeys.ts'

export const getSearchActionClickHandler = (name: string): SearchActionClickHandler => {
  switch (name) {
    case InputName.ClearSearchInput:
      return ClearInput.clearInput
    case InputName.RecordKeys:
      return StartRecordingKeys.startRecordingKeys
    default:
      throw new Error(`unexpected handler`)
  }
}
