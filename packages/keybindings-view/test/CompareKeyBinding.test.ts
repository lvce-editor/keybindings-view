import { expect, test } from '@jest/globals'
import * as CompareKeyBinding from '../src/parts/CompareKeyBinding/CompareKeyBinding.ts'

const a = { command: 'a.x', when: 2 }
const b = { command: 'b.x', when: 3 }

test('compareByPrecedence - higher when first', () => {
  expect(CompareKeyBinding.compareByPrecedence(b, a)).toBeLessThan(0)
})

test('compareByPrecedence - lower when first', () => {
  expect(CompareKeyBinding.compareByPrecedence(a, b)).toBeGreaterThan(0)
})

test('compareByName - alphabetical', () => {
  expect(CompareKeyBinding.compareByName(a, b)).toBeLessThan(0)
  expect(CompareKeyBinding.compareByName(b, a)).toBeGreaterThan(0)
})
