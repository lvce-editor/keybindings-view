import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const cell: VirtualDomNode = {
  type: VirtualDomElements.Td,
  className: ClassNames.TableCell,
  childCount: 1,
}

export const getKeyBindingsTableCellWhenDom = (keyBinding: VisibleKeyBinding): readonly VirtualDomNode[] => {
  const { when, isEditingWhenExpression } = keyBinding
  if (isEditingWhenExpression) {
    return [
      cell,
      {
        type: VirtualDomElements.Input,
        className: 'InputBox',
        childCount: 0,
        onBlur: DomEventListenerFunctions.HandleWhenExpressionInputBlur,
        name: InputName.WhenExpression,
      },
    ]
  }
  return [cell, text(when || '')]
}
