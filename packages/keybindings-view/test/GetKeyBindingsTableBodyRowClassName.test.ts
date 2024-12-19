import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableBodyRowClassName from '../src/parts/GetKeyBindingsTableBodyRowClassName/GetKeyBindingsTableBodyRowClassName.ts'

test('getRowClassName - even row not selected', () => {
  expect(GetKeyBindingsTableBodyRowClassName.getRowClassName(true, false)).toBe(
    `${ClassNames.KeyBindingsTableRow} ${ClassNames.KeyBindingsTableRowEven}`,
  )
})

test('getRowClassName - odd row not selected', () => {
  expect(GetKeyBindingsTableBodyRowClassName.getRowClassName(false, false)).toBe(
    `${ClassNames.KeyBindingsTableRow} ${ClassNames.KeyBindingsTableRowOdd}`,
  )
})

test('getRowClassName - even row selected', () => {
  expect(GetKeyBindingsTableBodyRowClassName.getRowClassName(true, true)).toBe(
    `${ClassNames.KeyBindingsTableRow} ${ClassNames.KeyBindingsTableRowEven} ${ClassNames.KeyBindingsTableRowSelected}`,
  )
})

test('getRowClassName - odd row selected', () => {
  expect(GetKeyBindingsTableBodyRowClassName.getRowClassName(false, true)).toBe(
    `${ClassNames.KeyBindingsTableRow} ${ClassNames.KeyBindingsTableRowOdd} ${ClassNames.KeyBindingsTableRowSelected}`,
  )
})
