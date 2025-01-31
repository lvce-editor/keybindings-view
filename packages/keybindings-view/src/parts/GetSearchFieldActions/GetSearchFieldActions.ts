import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'

export const getSearchFieldActions = (): readonly SearchFieldAction[] => {
  return [
    {
      name: InputName.RecordKeys,
      label: 'RecordKeys',
      icon: 'RecordKeys',
      onClick: DomEventListenerFunctions.HandleRecordKeys,
    },
    {
      name: InputName.SortByPrecedence,
      label: 'SortByPrecedence',
      icon: 'SortPrecedence',
      onClick: DomEventListenerFunctions.HandleSortByPrecedence,
    },
    {
      name: InputName.ClearSearchInput,
      label: 'Clear Search Input',
      icon: 'ClearAll',
      onClick: DomEventListenerFunctions.HandleClearInput,
    },
  ]
}
