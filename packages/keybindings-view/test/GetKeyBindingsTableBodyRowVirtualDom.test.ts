import { expect, test } from '@jest/globals'
import type { VisibleKeyBinding } from '../src/parts/VisibleKeyBinding/VisibleKeyBinding.ts'
import { HandleWhenExpressionInputBlur } from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetKeyBindingsTableBodyRowVirtualDom from '../src/parts/GetKeyBindingsTableBodyRowVirtualDom/GetKeyBindingsTableBodyRowVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableBodyRowDom - should create correct virtual DOM nodes for a row', () => {
  const mockKeyBinding: VisibleKeyBinding = {
    command: 'test.command',
    commandMatches: [],
    isCtrl: false,
    isEditingWhenExpression: false,
    isEven: true,
    isShift: false,
    key: 'Ctrl+S',
    keyMatches: [],
    rowIndex: 1,
    selected: false,
    when: 'editorFocus',
  }

  const result = GetKeyBindingsTableBodyRowVirtualDom.getKeyBindingsTableBodyRowDom(mockKeyBinding)

  // First node should be the tr element
  expect(result[0]).toEqual({
    ariaRowIndex: 1,
    childCount: 4,
    className: 'TableRow TableRowEven',
    key: 1,
    type: VirtualDomElements.Tr,
  })
})

test('getKeyBindingsTableBodyRowDom - should handle selected rows', () => {
  const mockKeyBinding: VisibleKeyBinding = {
    command: 'test.command',
    commandMatches: [],
    isCtrl: false,
    isEditingWhenExpression: false,
    isEven: false,
    isShift: false,
    key: 'Ctrl+S',
    keyMatches: [],
    rowIndex: 2,
    selected: true,
    when: 'editorFocus',
  }

  const result = GetKeyBindingsTableBodyRowVirtualDom.getKeyBindingsTableBodyRowDom(mockKeyBinding)

  expect(result[0]).toEqual({
    ariaRowIndex: 2,
    childCount: 4,
    className: 'TableRow TableRowOdd TableRowSelected',
    key: 2,
    type: VirtualDomElements.Tr,
  })
})

test('getKeyBindingsTableBodyRowDom - should handle editing rows', () => {
  const mockKeyBinding: VisibleKeyBinding = {
    command: 'test.command',
    commandMatches: [],
    isCtrl: false,
    isEditingWhenExpression: true,
    isEven: false,
    isShift: false,
    key: 'Ctrl+S',
    keyMatches: [],
    rowIndex: 2,
    selected: true,
    when: 'editorFocus',
  }

  const result = GetKeyBindingsTableBodyRowVirtualDom.getKeyBindingsTableBodyRowDom(mockKeyBinding)

  expect(result).toEqual([
    {
      ariaRowIndex: 2,
      childCount: 4,
      className: 'TableRow TableRowOdd TableRowSelected',
      key: 2,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: 11,
    },
    {
      childCount: 1,
      className: 'IconButton KeyBindingsEditButton',
      tabIndex: -1,
      title: 'Edit',
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
      className: 'InputBox',
      name: 'KeyBindingsWhenExpression',
      onBlur: HandleWhenExpressionInputBlur,
      type: 6,
    },
  ])
})

test('getKeyBindingsTableBodyRowDom - should return correct number of child nodes', () => {
  const mockKeyBinding: VisibleKeyBinding = {
    command: 'test.command',
    commandMatches: [],
    isCtrl: false,
    isEditingWhenExpression: false,
    isEven: true,
    isShift: false,
    key: 'Ctrl+S',
    keyMatches: [],
    rowIndex: 1,
    selected: false,
    when: 'editorFocus',
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
