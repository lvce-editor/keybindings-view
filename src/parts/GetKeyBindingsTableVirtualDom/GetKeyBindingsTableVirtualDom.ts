import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsTableBodyVirtualDom from '../GetKeyBindingsTableBodyVirtualDom/GetKeyBindingsTableBodyVirtualDom.ts'
import * as GetKeyBindingsTableColGroupVirtualDom from '../GetKeyBindingsTableColGroupVirtualDom/GetKeyBindingsTableColGroupVirtualDom.ts'
import * as GetKeyBindingsTableHeadVirtualDom from '../GetKeyBindingsTableHeadVirtualDom/GetKeyBindingsTableHeadVirtualDom.ts'
import * as KeyBindingsStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getTableDom = (filteredKeyBindings: any, displayKeyBindings: any, columnWidth1: number, columnWidth2: number, columnWidth3: number) => {
  const tableDom = [
    {
      type: VirtualDomElements.Table,
      className: ClassNames.KeyBindingsTable,
      ariaLabel: KeyBindingsStrings.keyBindings(),
      ariaRowCount: filteredKeyBindings.length,
      onClick: DomEventListenerFunctions.HandleTableClick,
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      tabIndex: 0,
      childCount: 3,
    },
    ...GetKeyBindingsTableColGroupVirtualDom.getKeyBindingsTableColGroupVirtualDom(columnWidth1, columnWidth2, columnWidth3),
    ...GetKeyBindingsTableHeadVirtualDom.getKeyBindingsTableHeadVirtualDom(),
    ...GetKeyBindingsTableBodyVirtualDom.getKeyBindingsTableBodyDom(displayKeyBindings),
  ]
  return tableDom
}
