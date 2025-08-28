import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const cell: VirtualDomNode = {
  type: VirtualDomElements.Td,
  className: ClassNames.TableCell,
  childCount: 1,
}

export const getKeyBindingsTableCellWhenDom = (keyBinding: VisibleKeyBinding, isEditingWhenExpression: boolean): readonly VirtualDomNode[] => {
  const { when } = keyBinding
  if (isEditingWhenExpression) {
    return [
      cell,
      {
        type: VirtualDomElements.Input,
        className: 'InputBox',
        childCount: 0,
      },
    ]
  }
  return [cell, text(when || '')]
}
