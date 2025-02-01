import { expect, test } from '@jest/globals'
import * as GetScrollBarSize from '../src/parts/GetScrollBarSize/GetScrollBarSize.ts'

test('getScrollBarSize - content smaller than viewport', () => {
  expect(GetScrollBarSize.getScrollBarSize(100, 50, 20)).toBe(0)
})

test('getScrollBarSize - content equals viewport', () => {
  expect(GetScrollBarSize.getScrollBarSize(100, 100, 20)).toBe(0)
})

test('getScrollBarSize - content larger than viewport', () => {
  expect(GetScrollBarSize.getScrollBarSize(100, 200, 20)).toBe(50)
})

test('getScrollBarSize - very large content', () => {
  expect(GetScrollBarSize.getScrollBarSize(100, 1000, 20)).toBe(20)
})

test('getScrollBarSize - zero viewport height', () => {
  expect(GetScrollBarSize.getScrollBarSize(0, 100, 20)).toBe(20)
})

test('getScrollBarSize - zero content height', () => {
  expect(GetScrollBarSize.getScrollBarSize(100, 0, 20)).toBe(0)
})

test('getScrollBarSize - respects minimum size', () => {
  // Content is 10x viewport, would normally result in 10% size
  // But minimum size of 20 should be enforced
  expect(GetScrollBarSize.getScrollBarSize(100, 1000, 20)).toBe(20)
})

test('getScrollBarSize - exact minimum size', () => {
  expect(GetScrollBarSize.getScrollBarSize(100, 500, 20)).toBe(20)
})
