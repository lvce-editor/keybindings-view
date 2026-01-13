import { expect, test } from '@jest/globals'
import * as ScrollBarFunctions from '../src/parts/ScrollBarFunctions/ScrollBarFunctions.ts'

test('getScrollBarWidth - width greater than longestLineWidth -> 0', () => {
  expect(ScrollBarFunctions.getScrollBarWidth(200, 100)).toBe(0)
})

test('getScrollBarWidth - width smaller than longestLineWidth -> computed', () => {
  expect(ScrollBarFunctions.getScrollBarWidth(50, 200)).toBe(12.5)
})

test('getNewDeltaPercent - top click', () => {
  const { handleOffset, percent } = ScrollBarFunctions.getNewDeltaPercent(100, 20, 5)
  expect(percent).toBe(0)
  expect(handleOffset).toBe(5)
})

test('getNewDeltaPercent - middle click', () => {
  const { handleOffset, percent } = ScrollBarFunctions.getNewDeltaPercent(100, 20, 60)
  expect(percent).toBeCloseTo((60 - 10) / (100 - 20))
  expect(handleOffset).toBe(10)
})

test('getNewDeltaPercent - bottom click', () => {
  const { handleOffset, percent } = ScrollBarFunctions.getNewDeltaPercent(100, 20, 95)
  expect(percent).toBe(1)
  expect(handleOffset).toBe(20 - 100 + 95)
})
