import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const kbdDom: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.Key,
  type: VirtualDomElements.Kbd,
}

const textCtrl = text('Ctrl')
const textAlt = text('Alt')
const textShift = text('Shift')
const textPlus = text('+')

interface Result {
  readonly childCount: number
  readonly children: VirtualDomNode[]
}

// TODO needing childCount variable everywhere can be error prone
export const getKeyBindingCellChildren = (keyBinding: VisibleKeyBinding): Result => {
  const { isAlt = false, isCtrl = false, isShift = false, key } = keyBinding
  const children: VirtualDomNode[] = []
  if (isCtrl) {
    children.push(kbdDom, textCtrl, textPlus)
  }
  if (isAlt) {
    children.push(kbdDom, textAlt, textPlus)
  }
  if (isShift) {
    children.push(kbdDom, textShift, textPlus)
  }
  children.push(kbdDom, text(key))
  const modifierCount = Number(isCtrl) + Number(isAlt) + Number(isShift)
  const childCount = modifierCount * 2 + 1
  return { childCount, children }
}
