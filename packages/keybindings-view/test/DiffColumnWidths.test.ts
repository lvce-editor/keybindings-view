import { expect, test } from '@jest/globals'
import * as DiffColumnWidths from '../src/parts/DiffColumnWidths/DiffColumnWidths.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('isEqual - same widths', () => {
  const a = { ...createDefaultState(), columnWidth1: 10, columnWidth2: 20, columnWidth3: 30 }
  const b = { ...createDefaultState(), columnWidth1: 10, columnWidth2: 20, columnWidth3: 30 }
  expect(DiffColumnWidths.isEqual(a, b)).toBe(true)
})

test('isEqual - different width', () => {
  const a = { ...createDefaultState(), columnWidth1: 10, columnWidth2: 20, columnWidth3: 30 }
  const b = { ...createDefaultState(), columnWidth1: 11, columnWidth2: 20, columnWidth3: 30 }
  expect(DiffColumnWidths.isEqual(a, b)).toBe(false)
})
