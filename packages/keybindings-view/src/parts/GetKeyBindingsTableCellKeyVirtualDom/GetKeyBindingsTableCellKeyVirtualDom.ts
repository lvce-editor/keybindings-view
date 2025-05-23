import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetKeyBindingCellChildren from '../GetKeyBindingCellChildren/GetKeyBindingCellChildren.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getKeyBindingsTableCellKeyDom = (keyBinding: VisibleKeyBinding): readonly VirtualDomNode[] => {
  const { children, childCount } = GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)
  return [
    {
      type: VirtualDomElements.Td,
      className: ClassNames.TableCell,
      childCount,
    },
    ...children,
  ]
}
