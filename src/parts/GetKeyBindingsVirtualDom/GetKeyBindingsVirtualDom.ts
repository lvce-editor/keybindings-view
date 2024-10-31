import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsHeaderVirtualDom from '../GetKeyBindingsHeaderVirtualDom/GetKeyBindingsHeaderVirtualDom.ts'
import * as GetKeyBindingsTableVirtualDom from '../GetKeyBindingsTableVirtualDom/GetKeyBindingsTableVirtualDom.ts'
import * as GetScrollBarVirtualDom from '../GetScrollBarVirtualDom/GetScrollBarVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

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
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.KeyBindings),
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
    ...GetScrollBarVirtualDom.getScrollBarVirtualDom(scrollBarThumbHeight, scrollBarThumbTop),
  ]
}
