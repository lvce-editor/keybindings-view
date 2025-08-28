import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getKeyBindingsInputVirtualDom } from '../GetKeyBindingsInputVirtualDom/GetKeyBindingsInputVirtualDom.ts'
import * as GetKeyBindingsSearchActionsVirtualDom from '../GetKeyBindingsSearchActionsVirtualDom/GetKeyBindingsSearchActionsVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getKeyBindingsHeaderVirtualDom = (
  isRecordingKeys: boolean,
  isSortingByPrecedence: boolean,
  hasValue: boolean,
): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsHeader,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.KeyBindingsSearchWrapper,
      childCount: 2,
    },
    getKeyBindingsInputVirtualDom(),
    ...GetKeyBindingsSearchActionsVirtualDom.getKeyBindingsSearchActionsVirtualDom(isRecordingKeys, isSortingByPrecedence, hasValue),
  ]
}
