import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../GetIconVirtualDom/GetIconVirtualDom.ts'
import * as Icon from '../Icon/Icon.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const cell: VirtualDomNode = {
  type: VirtualDomElements.Td,
  childCount: 1,
  className: ClassNames.TableCell,
}

export const getKeyBindingsTableEditCellDom = (): readonly VirtualDomNode[] => {
  const title = KeyBindingStrings.edit()
  return [
    cell,
    {
      type: VirtualDomElements.Button,
      className: MergeClassNames.mergeClassNames(ClassNames.IconButton, ClassNames.KeyBindingsEditButton),
      tabIndex: -1,
      title,
      childCount: 1,
    },
    GetIconVirtualDom.getIconVirtualDom(Icon.Edit),
  ]
}
