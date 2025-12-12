import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'
import * as Icon from '../Icon/Icon.ts'
import * as InputName from '../InputName/InputName.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'

export const getSearchFieldActions = (isRecordingKeys: boolean, isSortingByPrecedence: boolean, hasValue: boolean): readonly SearchFieldAction[] => {
  return [
    {
      checked: isRecordingKeys,
      enabled: true,
      icon: Icon.RecordKeys,
      label: KeyBindingStrings.recordKeys(),
      name: InputName.RecordKeys,
    },
    {
      checked: isSortingByPrecedence,
      enabled: true,
      icon: Icon.SortPrecedence,
      label: KeyBindingStrings.sortByPrecedence(),
      name: InputName.SortByPrecedence,
    },
    {
      checked: false,
      enabled: hasValue,
      icon: Icon.ClearAll,
      label: KeyBindingStrings.clearSearchInput(),
      name: InputName.ClearSearchInput,
    },
  ]
}
