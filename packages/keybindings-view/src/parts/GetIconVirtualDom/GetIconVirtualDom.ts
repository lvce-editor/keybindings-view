import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getIconVirtualDom = (icon: string, type = VirtualDomElements.Div): VirtualDomNode => {
  return {
    type,
    className: MergeClassNames.mergeClassNames(ClassNames.MaskIcon, icon),
    role: AriaRoles.None,
    childCount: 0,
  }
}
