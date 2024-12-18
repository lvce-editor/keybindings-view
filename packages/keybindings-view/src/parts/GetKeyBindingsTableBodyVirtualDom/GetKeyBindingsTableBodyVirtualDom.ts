import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableBodyRowVirtualDom from '../GetKeyBindingsTableBodyRowVirtualDom/GetKeyBindingsTableBodyRowVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getKeyBindingsTableBodyDom = (displayKeyBindings: any): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.TBody,
      className: ClassNames.KeyBindingsTableBody,
      childCount: displayKeyBindings.length,
    },
    ...displayKeyBindings.flatMap(GetKeyBindingsTableBodyRowVirtualDom.getKeyBindingsTableBodyRowDom),
  ]
}
