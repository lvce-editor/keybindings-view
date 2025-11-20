import { AriaRoles, mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsTableVirtualDom from '../GetKeyBindingsTableVirtualDom/GetKeyBindingsTableVirtualDom.ts'
import * as GetNoKeyBindingsFoundVirtualDom from '../GetNoKeyBindingsFoundVirtualDom/GetNoKeyBindingsFoundVirtualDom.ts'
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
  hasSelectedItem: boolean,
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
      onContextMenu: DomEventListenerFunctions.HandleTableContextMenu,
      childCount: 4,
      role: AriaRoles.None,
    },
    ...GetKeyBindingsTableVirtualDom.getTableDom(filteredItemsCount, displayKeyBindings, columnWidth1, columnWidth2, columnWidth3, hasSelectedItem),
    {
      type: VirtualDomElements.Div,
      className: mergeClassNames(ClassNames.Resizer, ClassNames.ResizerOne),
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: mergeClassNames(ClassNames.Resizer, ClassNames.ResizerTwo),
      childCount: 0,
    },
    ...GetScrollBarVirtualDom.getScrollBarVirtualDom(scrollBarThumbHeight, scrollBarThumbTop),
  ]
}
