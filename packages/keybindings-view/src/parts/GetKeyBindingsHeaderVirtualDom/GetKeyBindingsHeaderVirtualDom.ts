import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
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
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsHeader,
      onContextMenu: DomEventListenerFunctions.HandleSearchHeaderContextMenu,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsSearchWrapper,
      childCount: 2,
    },
    getKeyBindingsInputVirtualDom(placeholder),
    ...GetKeyBindingsSearchActionsVirtualDom.getKeyBindingsSearchActionsVirtualDom(isRecordingKeys, isSortingByPrecedence, hasValue),
  ]
}
