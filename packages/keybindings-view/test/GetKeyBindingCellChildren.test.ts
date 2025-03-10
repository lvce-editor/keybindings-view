import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingCellChildren from '../src/parts/GetKeyBindingCellChildren/GetKeyBindingCellChildren.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingCellChildren - no modifiers', () => {
  const keyBinding = {
    key: 'A',
    isCtrl: false,
    isShift: false,
  } as any
  expect(GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)).toEqual({
    children: [
      {
        type: VirtualDomElements.Kbd,
        className: ClassNames.Key,
        childCount: 1,
      },
      {
        childCount: 0,
        text: 'A',
        type: 12,
      },
    ],
    childCount: 1,
  })
})

test('getKeyBindingCellChildren - ctrl only', () => {
  const keyBinding = {
    key: 'A',
    isCtrl: true,
    isShift: false,
  } as any
  expect(GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)).toEqual({
    children: [
      {
        type: VirtualDomElements.Kbd,
        className: ClassNames.Key,
        childCount: 1,
      },
      {
        type: VirtualDomElements.Text,
        childCount: 0,
        text: 'Ctrl',
      },
      {
        childCount: 0,
        type: VirtualDomElements.Text,
        text: '+',
      },
      {
        type: VirtualDomElements.Kbd,
        className: ClassNames.Key,
        childCount: 1,
      },
      {
        childCount: 0,
        type: VirtualDomElements.Text,
        text: 'A',
      },
    ],
    childCount: 3,
  })
})

test('getKeyBindingCellChildren - shift only', () => {
  const keyBinding = {
    key: 'A',
    isCtrl: false,
    isShift: true,
  } as any
  expect(GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)).toEqual({
    children: [
      {
        type: VirtualDomElements.Kbd,
        className: ClassNames.Key,
        childCount: 1,
      },
      {
        type: VirtualDomElements.Text,
        childCount: 0,
        text: 'Shift',
      },
      {
        childCount: 0,
        type: VirtualDomElements.Text,
        text: '+',
      },
      {
        type: VirtualDomElements.Kbd,
        className: ClassNames.Key,
        childCount: 1,
      },
      {
        childCount: 0,
        type: VirtualDomElements.Text,
        text: 'A',
      },
    ],
    childCount: 3,
  })
})

test('getKeyBindingCellChildren - ctrl + shift', () => {
  const keyBinding = {
    key: 'A',
    isCtrl: true,
    isShift: true,
  } as any
  expect(GetKeyBindingCellChildren.getKeyBindingCellChildren(keyBinding)).toEqual({
    children: [
      {
        type: VirtualDomElements.Kbd,
        className: ClassNames.Key,
        childCount: 1,
      },
      {
        type: VirtualDomElements.Text,
        childCount: 0,
        text: 'Ctrl',
      },
      {
        type: VirtualDomElements.Text,
        childCount: 0,

        text: '+',
      },
      {
        type: VirtualDomElements.Kbd,
        className: ClassNames.Key,
        childCount: 1,
      },
      {
        type: VirtualDomElements.Text,
        childCount: 0,
        text: 'Shift',
      },
      {
        type: VirtualDomElements.Text,
        childCount: 0,
        text: '+',
      },
      {
        type: VirtualDomElements.Kbd,
        className: ClassNames.Key,
        childCount: 1,
      },
      {
        type: VirtualDomElements.Text,
        childCount: 0,
        text: 'A',
      },
    ],
    childCount: 5,
  })
})
