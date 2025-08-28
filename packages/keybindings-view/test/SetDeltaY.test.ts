import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SetDeltaY from '../src/parts/SetDeltaY/SetDeltaY.ts'

test('setDeltaY - clamps to min 0', () => {
  const s = { ...createDefaultState(), itemHeight: 10, maxVisibleItems: 3, items: [1, 2, 3, 4, 5] }
  const r = SetDeltaY.setDeltaY(s, -100)
  expect(r.deltaY).toBe(0)
  expect(r.minLineY).toBe(0)
})

test('setDeltaY - clamps to max', () => {
  const s = { ...createDefaultState(), itemHeight: 10, maxVisibleItems: 3, items: [1, 2, 3, 4, 5] }
  const tableHeight = s.maxVisibleItems * s.itemHeight
  const max = Math.max(s.items.length * s.itemHeight - tableHeight, 0)
  const r = SetDeltaY.setDeltaY(s, max + 100)
  expect(r.deltaY).toBe(max)
})

test('setDeltaY - computes minLineY and maxLineY', () => {
  const s = { ...createDefaultState(), itemHeight: 10, maxVisibleItems: 3, items: [1, 2, 3, 4, 5, 6] }
  const r = SetDeltaY.setDeltaY(s, 20)
  expect(r.minLineY).toBe(Math.floor(20 / 10))
  expect(r.maxLineY).toBe(r.minLineY + Math.round((s.maxVisibleItems * s.itemHeight) / s.itemHeight))
})
