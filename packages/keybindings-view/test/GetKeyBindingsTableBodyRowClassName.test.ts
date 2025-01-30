import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableBodyRowClassName from '../src/parts/GetKeyBindingsTableBodyRowClassName/GetKeyBindingsTableBodyRowClassName.ts'

test('getRowClassName - even row not selected', () => {
  expect(GetKeyBindingsTableBodyRowClassName.getRowClassName(true, false)).toBe(`${ClassNames.TableRow} ${ClassNames.TableRowEven}`)
})

test('getRowClassName - odd row not selected', () => {
  expect(GetKeyBindingsTableBodyRowClassName.getRowClassName(false, false)).toBe(`${ClassNames.TableRow} ${ClassNames.TableRowOdd}`)
})

test('getRowClassName - even row selected', () => {
  expect(GetKeyBindingsTableBodyRowClassName.getRowClassName(true, true)).toBe(
    `${ClassNames.TableRow} ${ClassNames.TableRowEven} ${ClassNames.TableRowSelected}`,
  )
})

test('getRowClassName - odd row selected', () => {
  expect(GetKeyBindingsTableBodyRowClassName.getRowClassName(false, true)).toBe(
    `${ClassNames.TableRow} ${ClassNames.TableRowOdd} ${ClassNames.TableRowSelected}`,
  )
})
