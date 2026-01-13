import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetKeyBindingCellChildren from '../GetKeyBindingCellChildren/GetKeyBindingCellChildren.ts'

export const getKeyBindingsTableCellKeyDom = (keyBinding: VisibleKeyBinding): readonly VirtualDomNode[] => {
  const { childCount, children } = GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)
  return [
    {
      childCount,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    ...children,
  ]
}
