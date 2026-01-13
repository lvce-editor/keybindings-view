import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const cell: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.TableCell,
  type: VirtualDomElements.Td,
}

export const getKeyBindingsTableCellWhenDom = (keyBinding: VisibleKeyBinding): readonly VirtualDomNode[] => {
  const { isEditingWhenExpression, when } = keyBinding
  if (isEditingWhenExpression) {
    return [
      cell,
      {
        childCount: 0,
        className: 'InputBox',
        name: InputName.WhenExpression,
        onBlur: DomEventListenerFunctions.HandleWhenExpressionInputBlur,
        type: VirtualDomElements.Input,
      },
    ]
  }
  return [cell, text(when || '')]
}
