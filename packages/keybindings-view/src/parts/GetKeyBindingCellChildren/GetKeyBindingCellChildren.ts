import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const kbdDom: VirtualDomNode = {
  type: VirtualDomElements.Kbd,
  className: ClassNames.Key,
  childCount: 1,
}

const textCtrl = text('Ctrl')
const textShift = text('Shift')
const textPlus = text('+')

interface Result {
  readonly children: VirtualDomNode[]
  readonly childCount: number
}

// TODO needing childCount variable everywhere can be error prone
export const getKeyBindingCellChildren = (keyBinding: VisibleKeyBinding): Result => {
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
