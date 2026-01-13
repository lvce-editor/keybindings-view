import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableBodyRowVirtualDom from '../GetKeyBindingsTableBodyRowVirtualDom/GetKeyBindingsTableBodyRowVirtualDom.ts'

export const getKeyBindingsTableBodyDom = (displayKeyBindings: readonly VisibleKeyBinding[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: displayKeyBindings.length,
      className: ClassNames.TableBody,
      type: VirtualDomElements.TBody,
    },
    ...displayKeyBindings.flatMap(GetKeyBindingsTableBodyRowVirtualDom.getKeyBindingsTableBodyRowDom),
  ]
}
