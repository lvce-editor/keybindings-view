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
const textShift = text('Shift')
const textPlus = text('+')

interface Result {
  readonly childCount: number
  readonly children: VirtualDomNode[]
}

const none: readonly VirtualDomNode[] = []
const ctrl: readonly VirtualDomNode[] = [kbdDom, textCtrl, textPlus]
const shift: readonly VirtualDomNode[] = [kbdDom, textShift, textPlus]
const ctrlShift: readonly VirtualDomNode[] = [...ctrl, ...shift]

const map = [none, ctrl, shift, ctrlShift]

const countMap = [0, 2, 2, 4]

// TODO maybe use flags number instead of booleans
const getRef = (isCtrl: boolean, isShift: boolean): number => {
  if (isCtrl && isShift) {
    return 3
  }
  if (isCtrl) {
    return 1
  }
  if (isShift) {
    return 2
  }
  return 0
}

// TODO needing childCount variable everywhere can be error prone
export const getKeyBindingCellChildren = (keyBinding: VisibleKeyBinding): Result => {
  const { isCtrl, isShift, key } = keyBinding
  const ref = getRef(isCtrl, isShift)
  const pre = map[ref]
  const count = countMap[ref]
  const children = [...pre, kbdDom, text(key)]
  const childCount = count + 1
  return { childCount, children }
}
