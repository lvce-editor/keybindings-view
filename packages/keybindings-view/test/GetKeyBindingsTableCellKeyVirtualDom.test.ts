import { expect, test } from '@jest/globals'
import type { VisibleKeyBinding } from '../src/parts/VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableCellKeyVirtualDom from '../src/parts/GetKeyBindingsTableCellKeyVirtualDom/GetKeyBindingsTableCellKeyVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableCellKeyDom - no modifiers', () => {
  const keyBinding: VisibleKeyBinding = {
    isCtrl: false,
    isShift: false,
    key: 'A',
  } as any
  expect(GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding)).toEqual([
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
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
  ])
})

test('getKeyBindingsTableCellKeyDom - with ctrl', () => {
  const keyBinding: VisibleKeyBinding = {
    isCtrl: true,
    isShift: false,
    key: 'A',
  } as any
  expect(GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding)).toEqual([
    {
      childCount: 3,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
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
      type: 12,
    },
  ])
})

test('getKeyBindingsTableCellKeyDom - with shift', () => {
  const keyBinding: VisibleKeyBinding = {
    isCtrl: false,
    isShift: true,
    key: 'A',
  } as any
  expect(GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding)).toEqual([
    {
      childCount: 3,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
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
      type: 12,
    },
  ])
})

test('getKeyBindingsTableCellKeyDom - with ctrl and shift', () => {
  const keyBinding: VisibleKeyBinding = {
    isCtrl: true,
    isShift: true,
    key: 'A',
  } as any
  expect(GetKeyBindingsTableCellKeyVirtualDom.getKeyBindingsTableCellKeyDom(keyBinding)).toEqual([
    {
      childCount: 5,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
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
      type: 12,
    },
  ])
})
