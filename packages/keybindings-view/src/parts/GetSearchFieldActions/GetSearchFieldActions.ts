import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'
import * as InputName from '../InputName/InputName.ts'

export const getSearchFieldActions = (): readonly SearchFieldAction[] => {
  return [
    {
      name: InputName.RecordKeys,
      label: 'RecordKeys',
      icon: 'RecordKeys',
    },
    {
      name: InputName.SortByPrecedence,
      label: 'SortByPrecedence',
      icon: 'SortPrecedence',
    },
    {
      name: InputName.ClearSearchInput,
      label: 'Clear Search Input',
      icon: 'ClearAll',
    },
  ]
}
