import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as Px from '../Px/Px.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getScrollBarVirtualDom = (scrollBarThumbHeight: number, scrollBarThumbTop: number) => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ScrollBar,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ScrollBarThumb,
      childCount: 0,
      height: Px.px(scrollBarThumbHeight),
      top: Px.px(scrollBarThumbTop),
    },
  ]
}
