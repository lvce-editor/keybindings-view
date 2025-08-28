import { expect, test } from '@jest/globals'
import * as DiffFocusContext from '../src/parts/DiffFocusContext/DiffFocusContext.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

const withFocus = (focus: number) => ({ ...createDefaultState(), focus })

test('isEqual - same focus', () => {
  const a = withFocus(1)
  const b = withFocus(1)
  expect(DiffFocusContext.isEqual(a, b)).toBe(true)
})

test('isEqual - different focus', () => {
  const a = withFocus(1)
  const b = withFocus(2)
  expect(DiffFocusContext.isEqual(a, b)).toBe(false)
})
