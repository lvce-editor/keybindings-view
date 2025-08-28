import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsTableVirtualDom from '../GetKeyBindingsTableVirtualDom/GetKeyBindingsTableVirtualDom.ts'
import * as GetNoKeyBindingsFoundVirtualDom from '../GetNoKeyBindingsFoundVirtualDom/GetNoKeyBindingsFoundVirtualDom.ts'
import * as GetScrollBarVirtualDom from '../GetScrollBarVirtualDom/GetScrollBarVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const resizer: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.Resizer,
  childCount: 0,
}

const getClassName = (focusedIndex: number): string => {
  return focusedIndex === -1 ? ClassNames.TableWrapper + ' ' + 'FocusOutline' : ClassNames.TableWrapper
}

export const getKeyBindingsTableWrapperVirtualDom = (
  filteredItemsCount: number,
  displayKeyBindings: readonly VisibleKeyBinding[],
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
  scrollBarThumbHeight: number,
  scrollBarThumbTop: number,
  focusedIndex: number,
): readonly VirtualDomNode[] => {
  if (displayKeyBindings.length === 0) {
    return GetNoKeyBindingsFoundVirtualDom.getNoKeyBindingsFoundVirtualDom()
  }
  const className = getClassName(focusedIndex)
  return [
    {
      type: VirtualDomElements.Div,
      className,
      onWheel: DomEventListenerFunctions.HandleWheel,
      onDblClick: DomEventListenerFunctions.HandleTableDoubleClick,
      onClick: DomEventListenerFunctions.HandleTableClick,
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      childCount: 4,
    },
    ...GetKeyBindingsTableVirtualDom.getTableDom(filteredItemsCount, displayKeyBindings, columnWidth1, columnWidth2, columnWidth3),
    resizer,
    resizer,
    ...GetScrollBarVirtualDom.getScrollBarVirtualDom(scrollBarThumbHeight, scrollBarThumbTop),
  ]
}
