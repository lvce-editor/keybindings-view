import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetKeyBindingsHeaderVirtualDom from '../GetKeyBindingsHeaderVirtualDom/GetKeyBindingsHeaderVirtualDom.ts'
import * as GetKeyBindingsTableVirtualDom from '../GetKeyBindingsTableVirtualDom/GetKeyBindingsTableVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as Px from '../Px/Px.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getKeyBindingsVirtualDom = (
  filteredKeyBindings: any[],
  displayKeyBindings: any,
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
  scrollBarThumbHeight: number,
  scrollBarThumbTop: number
) => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'Viewlet KeyBindings',
      onPointerDown: DomEventListenerFunctions.HandlePointerDown,
      onDblClick: DomEventListenerFunctions.HandleTableDoubleClick,
      onWheel: DomEventListenerFunctions.HandleWheel,
      childCount: 3,
    },
    ...GetKeyBindingsHeaderVirtualDom.getKeyBindingsHeaderVirtualDom(),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsTableWrapper,
      childCount: 3,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.Resizer,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.Resizer,
      childCount: 0,
    },
    ...GetKeyBindingsTableVirtualDom.getTableDom(filteredKeyBindings, displayKeyBindings, columnWidth1, columnWidth2, columnWidth3),
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
