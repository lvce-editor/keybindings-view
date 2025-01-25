import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const cell: VirtualDomNode = {
  type: VirtualDomElements.Td,
  className: ClassNames.KeyBindingsTableCell,
  childCount: 1,
}

export const getKeyBindingsTableCellWhenDom = (keyBinding: any): readonly VirtualDomNode[] => {
  const { when } = keyBinding
  const dom: VirtualDomNode[] = []
  dom.push(cell, text(when || ''))
  return dom
}
