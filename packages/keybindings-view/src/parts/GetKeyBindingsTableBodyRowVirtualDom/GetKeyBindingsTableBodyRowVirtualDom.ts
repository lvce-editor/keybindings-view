import * as GetKeyBindingsTableBodyRowClassName from '../GetKeyBindingsTableBodyRowClassName/GetKeyBindingsTableBodyRowClassName.ts'
import * as GetKeyBindingsTableCellCommandVirtualDom from '../GetKeyBindingsTableCellCommandVirtualDom/GetKeyBindingsTableCellCommandVirtualDom.ts'
import * as GetKeyBindingsTableCellEditVirtualDom from '../GetKeyBindingsTableCellEditVirtualDom/GetKeyBindingsTableCellEditVirtualDom.ts'
import * as GetKeyBindingsTableCellKeyVirtualDom from '../GetKeyBindingsTableCellKeyVirtualDom/GetKeyBindingsTableCellKeyVirtualDom.ts'
import * as GetKeyBindingsTableCellWhenVirtualDom from '../GetKeyBindingsTableCellWhenVirtualDom/GetKeyBindingsTableCellWhenVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getKeyBindingsTableBodyRowDom = (keyBinding: any) => {
  const { rowIndex, selected } = keyBinding
  const isEven = rowIndex % 2 === 0 // TODO compute iseven in getvisible
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
