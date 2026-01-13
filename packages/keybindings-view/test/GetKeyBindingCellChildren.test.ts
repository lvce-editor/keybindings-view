import { expect, test } from '@jest/globals'
import type { VisibleKeyBinding } from '../src/parts/VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingCellChildren from '../src/parts/GetKeyBindingCellChildren/GetKeyBindingCellChildren.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingCellChildren - no modifiers', () => {
  const keyBinding: VisibleKeyBinding = {
    isCtrl: false,
    isShift: false,
    key: 'A',
  } as any
  expect(GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)).toEqual({
    childCount: 1,
    children: [
      {
        childCount: 1,
        className: ClassNames.Key,
        type: VirtualDomElements.Kbd,
      },
      {
        childCount: 0,
        text: 'A',
        type: 12,
      },
    ],
  })
})

test('getKeyBindingCellChildren - ctrl only', () => {
  const keyBinding: VisibleKeyBinding = {
    isCtrl: true,
    isShift: false,
    key: 'A',
  } as any
  expect(GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)).toEqual({
    childCount: 3,
    children: [
      {
        childCount: 1,
        className: ClassNames.Key,
        type: VirtualDomElements.Kbd,
      },
      {
        childCount: 0,
        text: 'Ctrl',
        type: VirtualDomElements.Text,
      },
      {
        childCount: 0,
        text: '+',
        type: VirtualDomElements.Text,
      },
      {
        childCount: 1,
        className: ClassNames.Key,
        type: VirtualDomElements.Kbd,
      },
      {
        childCount: 0,
        text: 'A',
        type: VirtualDomElements.Text,
      },
    ],
  })
})

test('getKeyBindingCellChildren - shift only', () => {
  const keyBinding: VisibleKeyBinding = {
    isCtrl: false,
    isShift: true,
    key: 'A',
  } as any
  expect(GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)).toEqual({
    childCount: 3,
    children: [
      {
        childCount: 1,
        className: ClassNames.Key,
        type: VirtualDomElements.Kbd,
      },
      {
        childCount: 0,
        text: 'Shift',
        type: VirtualDomElements.Text,
      },
      {
        childCount: 0,
        text: '+',
        type: VirtualDomElements.Text,
      },
      {
        childCount: 1,
        className: ClassNames.Key,
        type: VirtualDomElements.Kbd,
      },
      {
        childCount: 0,
        text: 'A',
        type: VirtualDomElements.Text,
      },
    ],
  })
})

test('getKeyBindingCellChildren - ctrl + shift', () => {
  const keyBinding: VisibleKeyBinding = {
    isCtrl: true,
    isShift: true,
    key: 'A',
  } as any
  expect(GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)).toEqual({
    childCount: 5,
    children: [
      {
        childCount: 1,
        className: ClassNames.Key,
        type: VirtualDomElements.Kbd,
      },
      {
        childCount: 0,
        text: 'Ctrl',
        type: VirtualDomElements.Text,
      },
      {
        childCount: 0,
        text: '+',

        type: VirtualDomElements.Text,
      },
      {
        childCount: 1,
        className: ClassNames.Key,
        type: VirtualDomElements.Kbd,
      },
      {
        childCount: 0,
        text: 'Shift',
        type: VirtualDomElements.Text,
      },
      {
        childCount: 0,
        text: '+',
        type: VirtualDomElements.Text,
      },
      {
        childCount: 1,
        className: ClassNames.Key,
        type: VirtualDomElements.Kbd,
      },
      {
        childCount: 0,
        text: 'A',
        type: VirtualDomElements.Text,
      },
    ],
  })
})
