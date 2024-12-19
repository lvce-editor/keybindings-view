import { expect, test } from '@jest/globals'
import * as GetMaxVisibleItems from '../src/parts/GetMaxVisibleItems/GetMaxVisibleItems.ts'

test('getMaxVisibleItems - exact division', () => {
  expect(GetMaxVisibleItems.getMaxVisibleItems(100, 20, 20, 20)).toBe(3)
})

test('getMaxVisibleItems - with remainder', () => {
  expect(GetMaxVisibleItems.getMaxVisibleItems(105, 20, 20, 20)).toBe(3)
})

test('getMaxVisibleItems - zero height', () => {
  expect(GetMaxVisibleItems.getMaxVisibleItems(0, 20, 20, 20)).toBe(0)
})

test('getMaxVisibleItems - height smaller than headers', () => {
  expect(GetMaxVisibleItems.getMaxVisibleItems(30, 20, 20, 20)).toBe(0)
})

test('getMaxVisibleItems - large numbers', () => {
  expect(GetMaxVisibleItems.getMaxVisibleItems(1000, 50, 50, 25)).toBe(36)
})
