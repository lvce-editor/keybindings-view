import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableBodyVirtualDom from '../GetKeyBindingsTableBodyVirtualDom/GetKeyBindingsTableBodyVirtualDom.ts'
import * as GetKeyBindingsTableColGroupVirtualDom from '../GetKeyBindingsTableColGroupVirtualDom/GetKeyBindingsTableColGroupVirtualDom.ts'
import * as GetKeyBindingsTableHeadVirtualDom from '../GetKeyBindingsTableHeadVirtualDom/GetKeyBindingsTableHeadVirtualDom.ts'
import * as KeyBindingsStrings from '../KeyBindingStrings/KeyBindingStrings.ts'

export const getTableDom = (
  filteredItemsCount: number,
  displayKeyBindings: readonly VisibleKeyBinding[],
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
): readonly VirtualDomNode[] => {
  const tableDom = [
    {
      type: VirtualDomElements.Table,
      className: ClassNames.Table,
      ariaLabel: KeyBindingsStrings.keyBindings(),
      ariaRowCount: filteredItemsCount,
      tabIndex: 0,
      childCount: 3,
    },
    ...GetKeyBindingsTableColGroupVirtualDom.getKeyBindingsTableColGroupVirtualDom(columnWidth1, columnWidth2, columnWidth3),
    ...GetKeyBindingsTableHeadVirtualDom.getKeyBindingsTableHeadVirtualDom(),
    ...GetKeyBindingsTableBodyVirtualDom.getKeyBindingsTableBodyDom(displayKeyBindings),
  ]
  return tableDom
}
