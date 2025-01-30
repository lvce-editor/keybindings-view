import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'

export const getSearchFieldActions = (): readonly SearchFieldAction[] => {
  return [
    {
      name: 'RecordKeys',
      label: 'RecordKeys',
      icon: 'RecordKeys',
    },
    {
      name: 'SortByPrecdence',
      label: 'SortByPrecedence',
      icon: 'SortPrecedence',
    },
    {
      name: 'ClearSearchInput',
      label: 'Clear Search Input',
      icon: 'ClearAll',
    },
  ]
}
