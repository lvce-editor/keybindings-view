import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as Px from '../Px/Px.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const scrollbarNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.ScrollBar,
  childCount: 1,
}

export const getScrollBarVirtualDom = (scrollBarThumbHeight: number, scrollBarThumbTop: number): readonly VirtualDomNode[] => {
  return [
    scrollbarNode,
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ScrollBarThumb,
      childCount: 0,
      height: Px.px(scrollBarThumbHeight),
      top: Px.px(scrollBarThumbTop),
    },
  ]
}
