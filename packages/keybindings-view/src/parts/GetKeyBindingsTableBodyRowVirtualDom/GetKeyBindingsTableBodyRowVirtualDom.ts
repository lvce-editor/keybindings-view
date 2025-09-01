import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as GetKeyBindingsTableBodyRowClassName from '../GetKeyBindingsTableBodyRowClassName/GetKeyBindingsTableBodyRowClassName.ts'
import * as GetKeyBindingsTableCellCommandVirtualDom from '../GetKeyBindingsTableCellCommandVirtualDom/GetKeyBindingsTableCellCommandVirtualDom.ts'
import * as GetKeyBindingsTableCellEditVirtualDom from '../GetKeyBindingsTableCellEditVirtualDom/GetKeyBindingsTableCellEditVirtualDom.ts'
import * as GetKeyBindingsTableCellKeyVirtualDom from '../GetKeyBindingsTableCellKeyVirtualDom/GetKeyBindingsTableCellKeyVirtualDom.ts'
import * as GetKeyBindingsTableCellWhenVirtualDom from '../GetKeyBindingsTableCellWhenVirtualDom/GetKeyBindingsTableCellWhenVirtualDom.ts'

export const getKeyBindingsTableBodyRowDom = (keyBinding: VisibleKeyBinding): readonly VirtualDomNode[] => {
  const { rowIndex, selected, isEven } = keyBinding
  const className = GetKeyBindingsTableBodyRowClassName.getRowClassName(isEven, selected)
  const dom = [
    {
      type: VirtualDomElements.Tr,
      ariaRowIndex: rowIndex,
      className,
      key: rowIndex,
      childCount: 4,
    },
    ...GetKeyBindingsTableCellEditVirtualDom.getKeyBindingsTableEditCellDom(),
    ...GetKeyBindingsTableCellCommandVirtualDom.getKeyBindingsTableCellCommandDom(keyBinding),
    ...GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding),
    ...GetKeyBindingsTableCellWhenVirtualDom.getKeyBindingsTableCellWhenDom(keyBinding),
  ]
  return dom
}
