import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const scrollbarNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.ScrollBar,
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
