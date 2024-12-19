import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../GetIconVirtualDom/GetIconVirtualDom.ts'
import * as Icon from '../Icon/Icon.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'

export const getKeyBindingsTableEditCellDom = (): readonly VirtualDomNode[] => {
  const dom = []
  dom.push(
    {
      type: VirtualDomElements.Td,
      childCount: 1,
      className: ClassNames.KeyBindingsTableCell,
    },
    {
      type: VirtualDomElements.Button,
      className: `${ClassNames.IconButton} ${ClassNames.KeyBindingsEditButton}`,
      childCount: 1,
    },
    GetIconVirtualDom.getIconVirtualDom(Icon.Edit),
  )
  return dom
}
