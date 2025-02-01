import type { SearchActionClickHandler } from '../SearchActionClickHandler/SearchActionClickHandler.ts'
import * as ClearInput from '../ClearInput/ClearInput.ts'
import * as InputName from '../InputName/InputName.ts'
import * as SortByPrecedence from '../SortByPrecedence/SortByPrecedence.ts'
import * as ToggleRecordingKeys from '../ToggleRecordingKeys/ToggleRecordingKeys.ts'

export const getSearchActionClickHandler = (name: string): SearchActionClickHandler => {
  switch (name) {
    case InputName.ClearSearchInput:
      return ClearInput.clearInput
    case InputName.RecordKeys:
      return ToggleRecordingKeys.toggleRecordingKeys
    case InputName.SortByPrecedence:
      return SortByPrecedence.sortByPrecedence
    default:
      throw new Error(`unexpected handler`)
  }
}
