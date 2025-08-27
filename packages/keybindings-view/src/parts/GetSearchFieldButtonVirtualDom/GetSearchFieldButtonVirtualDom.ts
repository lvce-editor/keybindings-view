import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getSearchFieldClassName } from '../GetSearchFieldClassName/GetSearchFieldClassName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getSearchFieldButtonVirtualDom = (action: SearchFieldAction): readonly VirtualDomNode[] => {
  const { name, label, icon, checked, enabled } = action
  const className = getSearchFieldClassName(checked, enabled)
  return [
    {
      type: VirtualDomElements.Button,
      className,
      name,
      title: label,
      childCount: 1,
      onClick: DomEventListenerFunctions.HandleSearchActionClick,
      ariaChecked: `${checked}`,
      role: AriaRoles.CheckBox,
    },
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.MaskIcon, icon),
      childCount: 0,
    },
  ]
}
