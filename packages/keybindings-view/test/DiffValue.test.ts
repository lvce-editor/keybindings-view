import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffValue from '../src/parts/DiffValue/DiffValue.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'

test('isEqual - same value', () => {
  const a = { ...createDefaultState(), value: 'x' }
  const b = { ...createDefaultState(), value: 'x' }
  expect(DiffValue.isEqual(a, b)).toBe(true)
})

test('isEqual - different value', () => {
  const a = { ...createDefaultState(), inputSource: InputSource.Script, value: 'x' }
  const b = { ...createDefaultState(), inputSource: InputSource.Script, value: 'y' }
  expect(DiffValue.isEqual(a, b)).toBe(false)
})

test('isEqual - user input is already reflected in the DOM', () => {
  const a = { ...createDefaultState(), value: 'x' }
  const b = { ...createDefaultState(), inputSource: InputSource.User, value: 'xy' }
  expect(DiffValue.isEqual(a, b)).toBe(true)
})
