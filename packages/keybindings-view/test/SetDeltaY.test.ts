import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SetDeltaY from '../src/parts/SetDeltaY/SetDeltaY.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('setDeltaY - clamps to min 0', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    height: 30,
    itemHeight: 10,
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
    maxVisibleItems: 3,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
  }
  const result = SetDeltaY.setDeltaY(state, -100)
  expect(result.deltaY).toBe(0)
  expect(result.minLineY).toBe(0)
})

test('setDeltaY - clamps to max', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    height: 30,
    itemHeight: 10,
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
    maxVisibleItems: 3,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
  }
  const max = Math.max(state.items.length * state.itemHeight - state.height, 0)
  const result = SetDeltaY.setDeltaY(state, max + 100)
  expect(result.deltaY).toBe(max)
})

test('setDeltaY - computes minLineY and maxLineY', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    height: 30,
    itemHeight: 10,
    items: [
      makeParsedKeyBinding(),
      makeParsedKeyBinding(),
      makeParsedKeyBinding(),
      makeParsedKeyBinding(),
      makeParsedKeyBinding(),
      makeParsedKeyBinding(),
    ],
    maxVisibleItems: 3,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
  }
  const result = SetDeltaY.setDeltaY(state, 20)
  expect(result.minLineY).toBe(Math.floor(20 / 10))
  expect(result.maxLineY).toBe(result.minLineY + Math.round((state.maxVisibleItems * state.itemHeight) / state.itemHeight))
})

test('setDeltaY - uses the pixel viewport for a partial final row', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    height: 45,
    itemHeight: 10,
    items: Array.from({ length: 10 }, () => makeParsedKeyBinding()),
    searchHeaderHeight: 10,
    tableHeaderHeight: 10,
  }
  const result = SetDeltaY.setDeltaY(state, 1000)
  expect(result.finalDeltaY).toBe(75)
  expect(result.deltaY).toBe(75)
  expect(result.minLineY).toBe(7)
  expect(result.maxLineY).toBe(10)
  expect(result.visibleItems).toHaveLength(3)
})
