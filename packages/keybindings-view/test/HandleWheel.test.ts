import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleWheel from '../src/parts/HandleWheel/HandleWheel.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('handleWheel - increases deltaY and clamps within range', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    items: Array.from({ length: 100 }, () => makeParsedKeyBinding()),
    itemHeight: 10,
    maxVisibleItems: 5,
    deltaY: 0,
  }

  const updated = HandleWheel.handleWheel(state, 0, 15)
  expect(updated.deltaY).toBe(15)
  expect(updated.minLineY).toBe(1)
  expect(updated.maxLineY).toBe(6)

  const updated2 = HandleWheel.handleWheel(updated, 0, 10_000)
  expect(updated2.deltaY).toBeGreaterThan(0)
  const tableHeight = state.maxVisibleItems * state.itemHeight
  const maxDeltaY = Math.max(state.items.length * state.itemHeight - tableHeight, 0)
  expect(updated2.deltaY).toBe(maxDeltaY)
})
