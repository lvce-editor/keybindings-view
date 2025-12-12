import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../GetIconVirtualDom/GetIconVirtualDom.ts'
import * as Icon from '../Icon/Icon.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const cell: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.TableCell,
  type: VirtualDomElements.Td,
}

const icon: VirtualDomNode = GetIconVirtualDom.getIconVirtualDom(Icon.Edit)

const className = MergeClassNames.mergeClassNames(ClassNames.IconButton, ClassNames.KeyBindingsEditButton)

export const getKeyBindingsTableEditCellDom = (): readonly VirtualDomNode[] => {
  const title = KeyBindingStrings.edit()
  return [
    cell,
    {
      childCount: 1,
      className,
      tabIndex: -1,
      title,
      type: VirtualDomElements.Button,
    },
    icon,
  ]
}
