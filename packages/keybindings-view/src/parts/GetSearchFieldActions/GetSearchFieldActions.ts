import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'
import * as Icon from '../Icon/Icon.ts'
import * as InputName from '../InputName/InputName.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'

export const getSearchFieldActions = (isRecordingKeys: boolean, isSortingByPrecedence: boolean, value: string): readonly SearchFieldAction[] => {
  const hasValue = value !== ''
  return [
    {
      name: InputName.RecordKeys,
      label: KeyBindingStrings.recordKeys(),
      icon: Icon.RecordKeys,
      checked: isRecordingKeys,
      enabled: true,
    },
    {
      name: InputName.SortByPrecedence,
      label: KeyBindingStrings.sortByPrecedence(),
      icon: Icon.SortPrecedence,
      checked: isSortingByPrecedence,
      enabled: true,
    },
    {
      name: InputName.ClearSearchInput,
      label: KeyBindingStrings.clearAll(),
      icon: Icon.ClearAll,
      checked: false,
      enabled: hasValue,
    },
  ]
}
