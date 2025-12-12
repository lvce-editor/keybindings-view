import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
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
      ariaLabel: KeyBindingsStrings.keyBindings(),
      ariaRowCount: filteredItemsCount,
      childCount: 3,
      className: ClassNames.Table,
      onFocus: DomEventListenerFunctions.HandleTableFocus,
      tabIndex: 0,
      type: VirtualDomElements.Table,
    },
    ...GetKeyBindingsTableColGroupVirtualDom.getKeyBindingsTableColGroupVirtualDom(columnWidth1, columnWidth2, columnWidth3),
    ...GetKeyBindingsTableHeadVirtualDom.getKeyBindingsTableHeadVirtualDom(),
    ...GetKeyBindingsTableBodyVirtualDom.getKeyBindingsTableBodyDom(displayKeyBindings),
  ]
  return tableDom
}
