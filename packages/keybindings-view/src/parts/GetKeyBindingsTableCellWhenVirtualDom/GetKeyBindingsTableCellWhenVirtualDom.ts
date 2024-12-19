import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const cell = {
  type: VirtualDomElements.Td,
  className: ClassNames.KeyBindingsTableCell,
  childCount: 1,
}

export const getKeyBindingsTableCellWhenDom = (keyBinding: any) => {
  const { when } = keyBinding
  const dom = []
  dom.push(cell, text(when || ''))
  return dom
}
