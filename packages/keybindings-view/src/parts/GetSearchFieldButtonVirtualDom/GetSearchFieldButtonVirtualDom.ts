import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getSearchFieldClassName } from '../GetSearchFieldClassName/GetSearchFieldClassName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getSearchFieldButtonVirtualDom = (action: SearchFieldAction): readonly VirtualDomNode[] => {
  const { checked, enabled, icon, label, name } = action
  const className = getSearchFieldClassName(checked, enabled)
  return [
    {
      ariaChecked: `${checked}`,
      childCount: 1,
      className,
      name,
      onClick: DomEventListenerFunctions.HandleSearchActionClick,
      role: AriaRoles.CheckBox,
      title: label,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: MergeClassNames.mergeClassNames(ClassNames.MaskIcon, icon),
      type: VirtualDomElements.Div,
    },
  ]
}
