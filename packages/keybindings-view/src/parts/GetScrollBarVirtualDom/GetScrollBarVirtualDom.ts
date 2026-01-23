import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

const scrollbarNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ScrollBar,
  interDown: DomEventListenerFunctions.HandleScrollBarPointerDown, // TODO support pointercapture event
  type: VirtualDomElements.Div,
}

export const getScrollBarVirtualDom = (scrollBarThumbHeight: number, scrollBarThumbTop: number): readonly VirtualDomNode[] => {
  return [
    scrollbarNode,
    {
      childCount: 0,
      className: ClassNames.ScrollBarThumb,
      type: VirtualDomElements.Div,
    },
  ]
}
