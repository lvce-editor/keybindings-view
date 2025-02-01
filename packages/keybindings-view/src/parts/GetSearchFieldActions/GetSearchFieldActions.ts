import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'
import * as InputName from '../InputName/InputName.ts'

export const getSearchFieldActions = (isRecordingKeys: boolean): readonly SearchFieldAction[] => {
  return [
    {
      name: InputName.RecordKeys,
      label: 'RecordKeys',
      icon: 'RecordKeys',
      checked: isRecordingKeys,
      enabled: true,
    },
    {
      name: InputName.SortByPrecedence,
      label: 'SortByPrecedence',
      icon: 'SortPrecedence',
      checked: false,
      enabled: true,
    },
    {
      name: InputName.ClearSearchInput,
      label: 'Clear Search Input',
      icon: 'ClearAll',
      checked: false,
      enabled: true,
    },
  ]
}
