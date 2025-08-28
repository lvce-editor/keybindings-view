import { expect, test } from '@jest/globals'
import * as DiffValue from '../src/parts/DiffValue/DiffValue.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('isEqual - same value', () => {
  const a = { ...createDefaultState(), value: 'x' }
  const b = { ...createDefaultState(), value: 'x' }
  expect(DiffValue.isEqual(a, b)).toBe(true)
})

test('isEqual - different value', () => {
  const a = { ...createDefaultState(), value: 'x' }
  const b = { ...createDefaultState(), value: 'y' }
  expect(DiffValue.isEqual(a, b)).toBe(false)
})
