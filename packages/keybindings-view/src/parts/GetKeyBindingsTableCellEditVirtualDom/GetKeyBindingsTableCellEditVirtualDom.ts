import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../GetIconVirtualDom/GetIconVirtualDom.ts'
import * as Icon from '../Icon/Icon.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const cell: VirtualDomNode = {
  type: VirtualDomElements.Td,
  childCount: 1,
  className: ClassNames.TableCell,
}

const icon: VirtualDomNode = GetIconVirtualDom.getIconVirtualDom(Icon.Edit)

const className = MergeClassNames.mergeClassNames(ClassNames.IconButton, ClassNames.KeyBindingsEditButton)

export const getKeyBindingsTableEditCellDom = (): readonly VirtualDomNode[] => {
  return [
    cell,
    {
      type: VirtualDomElements.Button,
      className,
      childCount: 1,
    },
    icon,
  ]
}
