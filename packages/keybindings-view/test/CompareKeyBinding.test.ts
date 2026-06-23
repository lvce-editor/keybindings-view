import { expect, test } from '@jest/globals'
import * as CompareKeyBinding from '../src/parts/CompareKeyBinding/CompareKeyBinding.ts'

const lowerPrecedence = { command: 'a.x', when: 2 }
const higherPrecedence = { command: 'b.x', when: 3 }

test('compareByPrecedence - higher when first', () => {
  expect(CompareKeyBinding.compareByPrecedence(higherPrecedence, lowerPrecedence)).toBeLessThan(0)
})

test('compareByPrecedence - lower when first', () => {
  expect(CompareKeyBinding.compareByPrecedence(lowerPrecedence, higherPrecedence)).toBeGreaterThan(0)
})

test('compareByName - alphabetical', () => {
  expect(CompareKeyBinding.compareByName(lowerPrecedence, higherPrecedence)).toBeLessThan(0)
  expect(CompareKeyBinding.compareByName(higherPrecedence, lowerPrecedence)).toBeGreaterThan(0)
})
