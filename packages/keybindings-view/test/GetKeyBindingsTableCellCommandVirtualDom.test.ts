import { expect, test } from '@jest/globals'
import type { VisibleKeyBinding } from '../src/parts/VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableCellCommandVirtualDom from '../src/parts/GetKeyBindingsTableCellCommandVirtualDom/GetKeyBindingsTableCellCommandVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableCellCommandDom - with command and title', () => {
  const keyBinding: VisibleKeyBinding = {
    command: 'workbench.action.toggleSidebarVisibility',
    commandMatches: [],
    // @ts-ignore
    highlights: [],
    title: 'Toggle Sidebar Visibility',
  }
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

test('getKeyBindingsTableCellCommandDom - with command only', () => {
  const keyBinding: VisibleKeyBinding = {
    command: 'workbench.action.toggleSidebarVisibility',
    commandMatches: [],
    // @ts-ignore
    highlights: [],
    title: '',
  }
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
  const keyBinding: VisibleKeyBinding = {
    command: 'workbench.action.toggleSidebarVisibility',
    commandMatches: [0, 1, 3],
    // @ts-ignore
    highlights: [1, 3],
    title: 'Toggle Sidebar Visibility',
  }
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
