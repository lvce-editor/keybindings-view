import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsTableVirtualDom from '../GetKeyBindingsTableVirtualDom/GetKeyBindingsTableVirtualDom.ts'
import * as GetNoKeyBindingsFoundVirtualDom from '../GetNoKeyBindingsFoundVirtualDom/GetNoKeyBindingsFoundVirtualDom.ts'
import { getResizersVirtualDom } from '../GetResizersVirtualDom/GetResizersVirtualDom.ts'
import * as GetScrollBarVirtualDom from '../GetScrollBarVirtualDom/GetScrollBarVirtualDom.ts'

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
      childCount: 3,
      className,
      onClick: DomEventListenerFunctions.HandleTableClick,
      onContextMenu: DomEventListenerFunctions.HandleTableContextMenu,
      onDblClick: DomEventListenerFunctions.HandleTableDoubleClick,
      onWheel: DomEventListenerFunctions.HandleWheel,
      role: AriaRoles.None,
      type: VirtualDomElements.Div,
    },
    ...GetKeyBindingsTableVirtualDom.getTableDom(filteredItemsCount, displayKeyBindings, columnWidth1, columnWidth2, columnWidth3),
    ...getResizersVirtualDom(),
    ...GetScrollBarVirtualDom.getScrollBarVirtualDom(scrollBarThumbHeight, scrollBarThumbTop),
  ]
}
