import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getKeyBindingsInputVirtualDom } from '../GetKeyBindingsInputVirtualDom/GetKeyBindingsInputVirtualDom.ts'
import * as GetKeyBindingsSearchActionsVirtualDom from '../GetKeyBindingsSearchActionsVirtualDom/GetKeyBindingsSearchActionsVirtualDom.ts'

export const getKeyBindingsHeaderVirtualDom = (
  isRecordingKeys: boolean,
  isSortingByPrecedence: boolean,
  hasValue: boolean,
  placeholder: string,
): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: ClassNames.KeyBindingsHeader,
      onContextMenu: DomEventListenerFunctions.HandleSearchHeaderContextMenu,
      role: AriaRoles.None,
      type: VirtualDomElements.Div,
    },
    {
      ariaLabel: 'KeyBindings',
      childCount: 2,
      className: ClassNames.KeyBindingsSearchWrapper,
      role: 'search',
      type: VirtualDomElements.Div,
    },
    getKeyBindingsInputVirtualDom(placeholder),
    ...GetKeyBindingsSearchActionsVirtualDom.getKeyBindingsSearchActionsVirtualDom(isRecordingKeys, isSortingByPrecedence, hasValue),
  ]
}
