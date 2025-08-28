import { expect, test } from '@jest/globals'
import * as GetKeyBindingsTableVirtualDom from '../src/parts/GetKeyBindingsTableVirtualDom/GetKeyBindingsTableVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

const kb = (rowIndex: number) => ({
  rowIndex,
  selected: false,
  isEven: rowIndex % 2 === 0,
  isCtrl: false,
  isShift: false,
  commandMatches: [],
  keyMatches: [],
  command: 'x',
  key: 'y',
  when: '',
  isEditingWhenExpression: false,
})

test('getTableDom - basic table node', () => {
  const result = GetKeyBindingsTableVirtualDom.getTableDom(2, [kb(0), kb(1)] as any, 100, 200, 300)
  expect(result[0]).toMatchObject({ type: VirtualDomElements.Table, ariaRowCount: 2, tabIndex: 0 })
  // includes colgroup, thead and tbody entries
  expect(result.length).toBeGreaterThan(1)
})
