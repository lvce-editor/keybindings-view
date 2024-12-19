import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../GetIconVirtualDom/GetIconVirtualDom.ts'
import * as Icon from '../Icon/Icon.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getKeyBindingsTableEditCellDom = () => {
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
