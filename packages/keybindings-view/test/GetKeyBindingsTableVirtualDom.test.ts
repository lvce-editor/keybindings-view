import { expect, test } from '@jest/globals'
import * as GetKeyBindingsTableVirtualDom from '../src/parts/GetKeyBindingsTableVirtualDom/GetKeyBindingsTableVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

const kb = (rowIndex: number): any => ({
  command: 'x',
  commandMatches: [],
  isCtrl: false,
  isEditingWhenExpression: false,
  isEven: rowIndex % 2 === 0,
  isShift: false,
  key: 'y',
  keyMatches: [],
  rowIndex,
  selected: false,
  when: '',
})

test('getTableDom - basic table node', () => {
  const result = GetKeyBindingsTableVirtualDom.getTableDom(2, [kb(0), kb(1)] as any, 100, 200, 300)
  expect(result[0]).toMatchObject({ ariaRowCount: 2, tabIndex: 0, type: VirtualDomElements.Table })
  // includes colgroup, thead and tbody entries
  expect(result.length).toBeGreaterThan(1)
})
