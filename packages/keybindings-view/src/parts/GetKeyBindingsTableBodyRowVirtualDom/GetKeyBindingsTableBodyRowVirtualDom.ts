import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import { activeId } from '../ActiveId/ActiveId.ts'
import * as GetKeyBindingsTableBodyRowClassName from '../GetKeyBindingsTableBodyRowClassName/GetKeyBindingsTableBodyRowClassName.ts'
import * as GetKeyBindingsTableCellCommandVirtualDom from '../GetKeyBindingsTableCellCommandVirtualDom/GetKeyBindingsTableCellCommandVirtualDom.ts'
import * as GetKeyBindingsTableCellEditVirtualDom from '../GetKeyBindingsTableCellEditVirtualDom/GetKeyBindingsTableCellEditVirtualDom.ts'
import * as GetKeyBindingsTableCellKeyVirtualDom from '../GetKeyBindingsTableCellKeyVirtualDom/GetKeyBindingsTableCellKeyVirtualDom.ts'
import * as GetKeyBindingsTableCellWhenVirtualDom from '../GetKeyBindingsTableCellWhenVirtualDom/GetKeyBindingsTableCellWhenVirtualDom.ts'

interface IdProps {
  readonly id?: string
}

const emptyProps: IdProps = {}

const getIdProps = (selected: boolean): IdProps => {
  if (selected) {
    return {
      id: activeId,
    }
  }
  return emptyProps
}

export const getKeyBindingsTableBodyRowDom = (keyBinding: VisibleKeyBinding): readonly VirtualDomNode[] => {
  const { rowIndex, selected, isEven } = keyBinding
  const className = GetKeyBindingsTableBodyRowClassName.getRowClassName(isEven, selected)
  const idProps = getIdProps(selected)
  const dom = [
    {
      type: VirtualDomElements.Tr,
      className,
      ariaRowIndex: rowIndex,
      key: rowIndex,
      childCount: 4,
      ...idProps,
    },
    ...GetKeyBindingsTableCellEditVirtualDom.getKeyBindingsTableEditCellDom(),
    ...GetKeyBindingsTableCellCommandVirtualDom.getKeyBindingsTableCellCommandDom(keyBinding),
    ...GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding),
    ...GetKeyBindingsTableCellWhenVirtualDom.getKeyBindingsTableCellWhenDom(keyBinding),
  ]
  return dom
}
