import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles, mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getResizerVirtualDom = (extraClassName: string): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: mergeClassNames(ClassNames.Resizer, extraClassName),
      name: extraClassName,
      onPointerDown: DomEventListenerFunctions.HandleResizerPointerDown,
      role: AriaRoles.None,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: ClassNames.ResizerInner,
      type: VirtualDomElements.Div,
    },
  ]
}
