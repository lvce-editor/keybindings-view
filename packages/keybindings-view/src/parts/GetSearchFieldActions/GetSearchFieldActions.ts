import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'
import * as Icon from '../Icon/Icon.ts'
import * as InputName from '../InputName/InputName.ts'

export const getSearchFieldActions = (isRecordingKeys: boolean, value: string): readonly SearchFieldAction[] => {
  const hasValue = value !== ''
  // TODO use i18n for label
  return [
    {
      name: InputName.RecordKeys,
      label: 'RecordKeys',
      icon: Icon.RecordKeys,
      checked: isRecordingKeys,
      enabled: true,
    },
    {
      name: InputName.SortByPrecedence,
      label: 'SortByPrecedence',
      icon: Icon.SortPrecedence,
      checked: false,
      enabled: true,
    },
    {
      name: InputName.ClearSearchInput,
      label: 'Clear Search Input',
      icon: Icon.ClearAll,
      checked: false,
      enabled: hasValue,
    },
  ]
}
