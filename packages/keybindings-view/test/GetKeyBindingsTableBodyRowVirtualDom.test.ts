import { expect, test } from '@jest/globals'
import type { VisibleKeyBinding } from '../src/parts/VisibleKeyBinding/VisibleKeyBinding.ts'
import * as GetKeyBindingsTableBodyRowVirtualDom from '../src/parts/GetKeyBindingsTableBodyRowVirtualDom/GetKeyBindingsTableBodyRowVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableBodyRowDom - should create correct virtual DOM nodes for a row', () => {
  const mockKeyBinding: VisibleKeyBinding = {
    rowIndex: 1,
    selected: false,
    isCtrl: false,
    isShift: false,
    commandMatches: [],
    keyMatches: [],
    isEven: true,
    command: 'test.command',
    key: 'Ctrl+S',
    when: 'editorFocus',
    isEditingWhenExpression: false,
  }

  const result = GetKeyBindingsTableBodyRowVirtualDom.getKeyBindingsTableBodyRowDom(mockKeyBinding)

  // First node should be the tr element
  expect(result[0]).toEqual({
    type: VirtualDomElements.Tr,
    ariaRowIndex: 1,
    className: 'TableRow TableRowEven',
    key: 1,
    childCount: 4,
  })
})

test('getKeyBindingsTableBodyRowDom - should handle selected rows', () => {
  const mockKeyBinding: VisibleKeyBinding = {
    rowIndex: 2,
    selected: true,
    isEven: false,
    isCtrl: false,
    isShift: false,
    commandMatches: [],
    keyMatches: [],
    command: 'test.command',
    key: 'Ctrl+S',
    when: 'editorFocus',
    isEditingWhenExpression: false,
  }

  const result = GetKeyBindingsTableBodyRowVirtualDom.getKeyBindingsTableBodyRowDom(mockKeyBinding)

  expect(result[0]).toEqual({
    type: VirtualDomElements.Tr,
    ariaRowIndex: 2,
    className: 'TableRow TableRowOdd TableRowSelected',
    key: 2,
    childCount: 4,
  })
})

test('getKeyBindingsTableBodyRowDom - should handle editing rows', () => {
  const mockKeyBinding: VisibleKeyBinding = {
    rowIndex: 2,
    selected: true,
    isEven: false,
    isCtrl: false,
    isShift: false,
    commandMatches: [],
    keyMatches: [],
    command: 'test.command',
    key: 'Ctrl+S',
    when: 'editorFocus',
    isEditingWhenExpression: true,
  }

  const result = GetKeyBindingsTableBodyRowVirtualDom.getKeyBindingsTableBodyRowDom(mockKeyBinding)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Tr,
      ariaRowIndex: 2,
      className: 'TableRow TableRowOdd TableRowSelected',
      key: 2,
      childCount: 4,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: 11,
    },
    {
      childCount: 1,
      className: 'IconButton KeyBindingsEditButton',
      type: 1,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconEdit',
      role: 'none',
      type: 4,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: 11,
    },
    {
      childCount: 0,
      text: 'test.command',
      type: 12,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: 11,
    },
    {
      childCount: 1,
      className: 'Key',
      type: 7,
    },
    {
      childCount: 0,
      text: 'Ctrl+S',
      type: 12,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: 11,
    },
    {
      childCount: 0,
      type: 6,
      className: 'InputBox',
      onBlur: 'handleWhenExpressionInputBlur',
      name: 'KeyBindingsWhenExpression',
    },
  ])
})

test('getKeyBindingsTableBodyRowDom - should return correct number of child nodes', () => {
  const mockKeyBinding: VisibleKeyBinding = {
    rowIndex: 1,
    selected: false,
    isEven: true,
    isCtrl: false,
    isShift: false,
    commandMatches: [],
    keyMatches: [],
    command: 'test.command',
    key: 'Ctrl+S',
    when: 'editorFocus',
    isEditingWhenExpression: false,
  }

  const result = GetKeyBindingsTableBodyRowVirtualDom.getKeyBindingsTableBodyRowDom(mockKeyBinding)

  // The result should contain nodes for:
  // 1. Tr element
  // 2. Edit cell nodes
  // 3. Command cell nodes
  // 4. Key cell nodes
  // 5. When cell nodes
  expect(result.length).toBeGreaterThan(1)
})
