import type { SearchFieldAction } from '../SearchFieldAction/SearchFieldAction.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getSearchFieldButtonVirtualDom = (action: SearchFieldAction): readonly VirtualDomNode[] => {
  const { name, label, icon, onClick } = action
  return [
    {
      type: VirtualDomElements.Button,
      className: ClassNames.SearchFieldButton,
      name,
      title: label,
      childCount: 1,
      onClick,
    },
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.MaskIcon} MaskIcon${icon}`,
      childCount: 0,
    },
  ]
}
