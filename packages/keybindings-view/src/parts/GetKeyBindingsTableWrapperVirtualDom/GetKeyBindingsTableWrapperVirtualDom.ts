import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsTableVirtualDom from '../GetKeyBindingsTableVirtualDom/GetKeyBindingsTableVirtualDom.ts'
import * as GetNoKeyBindingsFoundVirtualDom from '../GetNoKeyBindingsFoundVirtualDom/GetNoKeyBindingsFoundVirtualDom.ts'
import * as GetScrollBarVirtualDom from '../GetScrollBarVirtualDom/GetScrollBarVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.TableWrapper,
  onWheel: DomEventListenerFunctions.HandleWheel,
  onDblClick: DomEventListenerFunctions.HandleTableDoubleClick,
  childCount: 4,
}

const resizer: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.Resizer,
  childCount: 0,
}

export const getKeyBindingsTableWrapperVirtualDom = (
  filteredKeyBindings: readonly any[],
  displayKeyBindings: readonly VisibleKeyBinding[],
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
  scrollBarThumbHeight: number,
  scrollBarThumbTop: number,
): readonly VirtualDomNode[] => {
  if (displayKeyBindings.length === 0) {
    return GetNoKeyBindingsFoundVirtualDom.getNoKeyBindingsFoundVirtualDom()
  }
  return [
    parentNode,
    ...GetKeyBindingsTableVirtualDom.getTableDom(filteredKeyBindings, displayKeyBindings, columnWidth1, columnWidth2, columnWidth3),
    resizer,
    resizer,
    ...GetScrollBarVirtualDom.getScrollBarVirtualDom(scrollBarThumbHeight, scrollBarThumbTop),
  ]
}
