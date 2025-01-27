import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableCellKeyVirtualDom from '../src/parts/GetKeyBindingsTableCellKeyVirtualDom/GetKeyBindingsTableCellKeyVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableCellKeyDom - no modifiers', () => {
  const keyBinding = {
    key: 'A',
    isCtrl: false,
    isShift: false,
  } as any
  expect(GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 'A',
    },
  ])
})

test('getKeyBindingsTableCellKeyDom - with ctrl', () => {
  const keyBinding = {
    key: 'A',
    isCtrl: true,
    isShift: false,
  } as any
  expect(GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 3,
    },
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
  ])
})

test('getKeyBindingsTableCellKeyDom - with shift', () => {
  const keyBinding = {
    key: 'A',
    isCtrl: false,
    isShift: true,
  } as any
  expect(GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Kbd,
      className: ClassNames.Key,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 'Shift',
    },
    {
      type: VirtualDomElements.Text,
      text: '+',
    },
  ])
})

test('getKeyBindingsTableCellKeyDom - with ctrl and shift', () => {
  const keyBinding = {
    key: 'A',
    isCtrl: true,
    isShift: true,
  } as any
  expect(GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 5,
    },
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
  ])
})
