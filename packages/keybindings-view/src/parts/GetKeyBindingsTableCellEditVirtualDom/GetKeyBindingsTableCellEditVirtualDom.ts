import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../GetIconVirtualDom/GetIconVirtualDom.ts'
import * as Icon from '../Icon/Icon.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getKeyBindingsTableEditCellDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Td,
      childCount: 1,
      className: ClassNames.TableCell,
    },
    {
      type: VirtualDomElements.Button,
      className: MergeClassNames.mergeClassNames(ClassNames.IconButton, ClassNames.KeyBindingsEditButton),
      tabIndex: -1,
      childCount: 1,
    },
    GetIconVirtualDom.getIconVirtualDom(Icon.Edit),
  ]
}
