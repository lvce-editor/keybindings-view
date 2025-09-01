import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsHeaderVirtualDom from '../GetKeyBindingsHeaderVirtualDom/GetKeyBindingsHeaderVirtualDom.ts'
import * as GetKeyBindingsTableWrapperVirtualDom from '../GetKeyBindingsTableWrapperVirtualDom/GetKeyBindingsTableWrapperVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getKeyBindingsVirtualDom = (
  filteredItemsCount: number,
  displayKeyBindings: readonly VisibleKeyBinding[],
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
  scrollBarThumbHeight: number,
  scrollBarThumbTop: number,
  isRecordingKeys: boolean,
  isSortingByPrecedence: boolean,
  hasValue: boolean,
  focusedIndex: number,
): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.KeyBindings),
      onPointerDown: DomEventListenerFunctions.HandlePointerDown,
      childCount: 2,
    },
    ...GetKeyBindingsHeaderVirtualDom.getKeyBindingsHeaderVirtualDom(isRecordingKeys, isSortingByPrecedence, hasValue),
    ...GetKeyBindingsTableWrapperVirtualDom.getKeyBindingsTableWrapperVirtualDom(
      filteredItemsCount,
      displayKeyBindings,
      columnWidth1,
      columnWidth2,
      columnWidth3,
      scrollBarThumbHeight,
      scrollBarThumbTop,
      focusedIndex,
    ),
  ]
}
