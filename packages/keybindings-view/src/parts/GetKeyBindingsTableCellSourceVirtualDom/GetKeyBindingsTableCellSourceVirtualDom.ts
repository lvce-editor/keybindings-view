import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const cell: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.TableCell,
  type: VirtualDomElements.Td,
}

export const getKeyBindingsTableCellSourceDom = (keyBinding: VisibleKeyBinding): readonly VirtualDomNode[] => {
  return [cell, text(keyBinding.source || 'System')]
}
