import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableCellCommandVirtualDom from '../src/parts/GetKeyBindingsTableCellCommandVirtualDom/GetKeyBindingsTableCellCommandVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableCellCommandDom - with command and title', () => {
  const keyBinding = {
    command: 'workbench.action.toggleSidebarVisibility',
    title: 'Toggle Sidebar Visibility',
    highlights: [],
    commandMatches: [],
  }
  expect(GetKeyBindingsTableCellCommandVirtualDom.getKeyBindingsTableCellCommandDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: keyBinding.command,
    },
  ])
})

test.skip('getKeyBindingsTableCellCommandDom - with command only', () => {
  const keyBinding = {
    command: 'workbench.action.toggleSidebarVisibility',
    title: '',
    highlights: [],
    commandMatches: [],
  }
  expect(GetKeyBindingsTableCellCommandVirtualDom.getKeyBindingsTableCellCommandDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: keyBinding.command,
    },
  ])
})

test.skip('getKeyBindingsTableCellCommandDom - with highlights', () => {
  const keyBinding = {
    command: 'workbench.action.toggleSidebarVisibility',
    title: 'Toggle Sidebar Visibility',
    highlights: [1, 3],
    commandMatches: [],
  }
  expect(GetKeyBindingsTableCellCommandVirtualDom.getKeyBindingsTableCellCommandDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 3,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 'w',
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.SearchHighlight,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 'orkbench.action.toggleSidebarVisibility',
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: ` - ${keyBinding.title}`,
    },
  ])
})
