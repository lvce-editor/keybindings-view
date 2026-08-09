import { expect, test } from '@jest/globals'
import type { VisibleKeyBinding } from '../src/parts/VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableCellCommandVirtualDom from '../src/parts/GetKeyBindingsTableCellCommandVirtualDom/GetKeyBindingsTableCellCommandVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

const createKeyBinding = (commandMatches: readonly number[]): VisibleKeyBinding => ({
  command: 'workbench.action.toggleSidebarVisibility',
  commandMatches,
  isCtrl: false,
  isEditingWhenExpression: false,
  isEven: false,
  isShift: false,
  key: '',
  keyMatches: [],
  rowIndex: 0,
  selected: false,
  when: '',
})

test('getKeyBindingsTableCellCommandDom - without matches', () => {
  const keyBinding = createKeyBinding([])
  expect(GetKeyBindingsTableCellCommandVirtualDom.getKeyBindingsTableCellCommandDom(keyBinding)).toEqual([
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: keyBinding.command,
      type: VirtualDomElements.Text,
    },
  ])
})

test('getKeyBindingsTableCellCommandDom - with empty matches', () => {
  const keyBinding = createKeyBinding([])
  expect(GetKeyBindingsTableCellCommandVirtualDom.getKeyBindingsTableCellCommandDom(keyBinding)).toEqual([
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: keyBinding.command,
      type: VirtualDomElements.Text,
    },
  ])
})

test('getKeyBindingsTableCellCommandDom - with highlights', () => {
  const keyBinding = createKeyBinding([0, 1, 3])
  expect(GetKeyBindingsTableCellCommandVirtualDom.getKeyBindingsTableCellCommandDom(keyBinding)).toEqual([
    {
      childCount: 3,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: 'w',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: ClassNames.SearchHighlight,
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: 'or',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 0,
      text: 'kbench.action.toggleSidebarVisibility',
      type: VirtualDomElements.Text,
    },
  ])
})
