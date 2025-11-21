import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getResizerVirtualDom = (extraClassName: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Button,
      className: mergeClassNames(ClassNames.Resizer, extraClassName),
      role: AriaRoles.None,
      name: extraClassName,
      childCount: 1,
      onPointerDown: DomEventListenerFunctions.HandleResizerPointerDown,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ResizerInner,
      childCount: 0,
    },
  ]
}
