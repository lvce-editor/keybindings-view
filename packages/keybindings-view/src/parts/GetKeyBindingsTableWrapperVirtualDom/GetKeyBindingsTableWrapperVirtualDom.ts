import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsTableVirtualDom from '../GetKeyBindingsTableVirtualDom/GetKeyBindingsTableVirtualDom.ts'
import * as GetScrollBarVirtualDom from '../GetScrollBarVirtualDom/GetScrollBarVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getKeyBindingsTableWrapperVirtualDom = (
  filteredKeyBindings: readonly any[],
  displayKeyBindings: any,
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
  scrollBarThumbHeight: number,
  scrollBarThumbTop: number,
): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsTableWrapper,
      onWheel: DomEventListenerFunctions.HandleWheel,
      childCount: 4,
    },
    ...GetKeyBindingsTableVirtualDom.getTableDom(filteredKeyBindings, displayKeyBindings, columnWidth1, columnWidth2, columnWidth3),
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
    ...GetScrollBarVirtualDom.getScrollBarVirtualDom(scrollBarThumbHeight, scrollBarThumbTop),
  ]
}
