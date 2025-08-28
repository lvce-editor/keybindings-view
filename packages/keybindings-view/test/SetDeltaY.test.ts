import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SetDeltaY from '../src/parts/SetDeltaY/SetDeltaY.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('setDeltaY - clamps to min 0', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    itemHeight: 10,
    maxVisibleItems: 3,
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
  }
  const result = SetDeltaY.setDeltaY(state, -100)
  expect(result.deltaY).toBe(0)
  expect(result.minLineY).toBe(0)
})

test('setDeltaY - clamps to max', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    itemHeight: 10,
    maxVisibleItems: 3,
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
  }
  const tableHeight = state.maxVisibleItems * state.itemHeight
  const max = Math.max(state.items.length * state.itemHeight - tableHeight, 0)
  const result = SetDeltaY.setDeltaY(state, max + 100)
  expect(result.deltaY).toBe(max)
})

test('setDeltaY - computes minLineY and maxLineY', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    itemHeight: 10,
    maxVisibleItems: 3,
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
  }
  const result = SetDeltaY.setDeltaY(state, 20)
  expect(result.minLineY).toBe(Math.floor(20 / 10))
  expect(result.maxLineY).toBe(result.minLineY + Math.round((state.maxVisibleItems * state.itemHeight) / state.itemHeight))
})
