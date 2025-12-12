import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetRecordingKeysBadgeVirtualDom from '../GetRecordingKeysBadgeVirtualDom/GetRecordingKeysBadgeVirtualDom.ts'
import * as GetSearchFieldActions from '../GetSearchFieldActions/GetSearchFieldActions.ts'
import * as GetSearchFieldButtonVirtualDom from '../GetSearchFieldButtonVirtualDom/GetSearchFieldButtonVirtualDom.ts'

export const getKeyBindingsSearchActionsVirtualDom = (
  isRecordingKeys: boolean,
  isSortingByPrecedence: boolean,
  hasValue: boolean,
): readonly VirtualDomNode[] => {
  const actions = GetSearchFieldActions.getSearchFieldActions(isRecordingKeys, isSortingByPrecedence, hasValue)
  const childCount = isRecordingKeys ? 2 : 1
  return [
    {
      childCount,
      className: ClassNames.KeyBindingsSearchActions,
      type: VirtualDomElements.Div,
    },
    ...GetRecordingKeysBadgeVirtualDom.getRecordingKeysBadgeVirtualDom(isRecordingKeys),
    {
      childCount: actions.length,
      className: mergeClassNames(ClassNames.SearchFieldButtons, ClassNames.KeyBindingsSearchButtons),
      type: VirtualDomElements.Div,
    },
    ...actions.flatMap(GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom),
  ]
}
