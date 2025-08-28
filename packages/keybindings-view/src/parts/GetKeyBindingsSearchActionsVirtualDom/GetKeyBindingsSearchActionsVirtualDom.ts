import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetRecordingKeysBadgeVirtualDom from '../GetRecordingKeysBadgeVirtualDom/GetRecordingKeysBadgeVirtualDom.ts'
import * as GetSearchFieldActions from '../GetSearchFieldActions/GetSearchFieldActions.ts'
import * as GetSearchFieldButtonVirtualDom from '../GetSearchFieldButtonVirtualDom/GetSearchFieldButtonVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getKeyBindingsSearchActionsVirtualDom = (
  isRecordingKeys: boolean,
  isSortingByPrecedence: boolean,
  hasValue: boolean,
): readonly VirtualDomNode[] => {
  const actions = GetSearchFieldActions.getSearchFieldActions(isRecordingKeys, isSortingByPrecedence, hasValue)
  const childCount = isRecordingKeys ? 2 : 1
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsSearchActions,
      childCount,
    },
    ...GetRecordingKeysBadgeVirtualDom.getRecordingKeysBadgeVirtualDom(isRecordingKeys),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchFieldButtons,
      childCount: actions.length,
    },
    ...actions.flatMap(GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom),
  ]
}
