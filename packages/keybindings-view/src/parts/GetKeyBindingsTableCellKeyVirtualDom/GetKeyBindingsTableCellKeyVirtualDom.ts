import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const kbdDom = {
  type: VirtualDomElements.Kbd,
  className: ClassNames.Key,
  childCount: 1,
}

const textCtrl = text('Ctrl')
const textShift = text('Shift')
const textPlus = text('+')

// TODO needing childCount variable everywhere can be error prone
const getKeyBindingCellChildren = (keyBinding: any) => {
  const { isCtrl, isShift, key } = keyBinding
  const children = []
  let childCount = 0
  if (isCtrl) {
    childCount += 2
    children.push(kbdDom, textCtrl, textPlus)
  }
  if (isShift) {
    childCount += 2
    children.push(kbdDom, textShift, textPlus)
  }
  childCount++
  children.push(kbdDom, text(key))
  return { children, childCount }
}

export const getKeyBindingsTableCellKeyDom = (keyBinding: any) => {
  const { children, childCount } = getKeyBindingCellChildren(keyBinding)
  const dom = []
  dom.push(
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount,
    },
    ...children,
  )
  return dom
}
