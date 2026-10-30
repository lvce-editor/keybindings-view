import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleScrollBarPointerMove from '../src/parts/HandleScrollBarPointerMove/HandleScrollBarPointerMove.ts'

test('handleScrollBarPointerMove - returns same state when scrollBarPointerDown is false', () => {
  const state: KeyBindingsState = { ...createDefaultState(), scrollBarPointerDown: false }
  const newState = HandleScrollBarPointerMove.handleScrollBarPointerMove(state, 100)
  expect(newState).toBe(state)
})

test('handleScrollBarPointerMove - updates deltaY when scrollBarPointerDown is true', () => {
  const items = Array.from({ length: 50 }, (_, i) => ({ id: String(i) }))
  const state: KeyBindingsState = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    handleOffset: 25,
    height: 500,
    itemHeight: 30,
    items: items as any,
    maxVisibleItems: 20,
    scrollBarHeight: 50,
    scrollBarPointerDown: true,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
    y: 100,
  }
  const clientY = 200
  const newState = HandleScrollBarPointerMove.handleScrollBarPointerMove(state, clientY)
  // The pointer retains its 25px offset within the 50px thumb.
  // percent = (200 - 100 - 25) / (500 - 50) = 75 / 450 = 0.1667
  // newDeltaY = 0.1667 * 1000 = 166.7
  expect(newState.deltaY).toBeCloseTo(166.6667, 4)
})

test('handleScrollBarPointerMove - updates deltaY to 0 when at top', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    deltaY: 100,
    finalDeltaY: 1000,
    height: 500,
    scrollBarHeight: 50,
    scrollBarPointerDown: true,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
    y: 100,
  }
  const clientY = 100
  const newState = HandleScrollBarPointerMove.handleScrollBarPointerMove(state, clientY)
  // relativeY = 100 - 100 = 0
  // percent = 0 (clicked at top)
  // newDeltaY = 0 * 1000 = 0
  expect(newState.deltaY).toBe(0)
})

test('handleScrollBarPointerMove - updates deltaY to finalDeltaY when at bottom', () => {
  const items = Array.from({ length: 50 }, (_, i) => ({ id: String(i) }))
  const state: KeyBindingsState = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 720,
    handleOffset: 25,
    height: 480,
    itemHeight: 24,
    items: items as any,
    maxVisibleItems: 20,
    scrollBarHeight: 50,
    scrollBarPointerDown: true,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
    y: 100,
  }
  const clientY = 580
  const newState = HandleScrollBarPointerMove.handleScrollBarPointerMove(state, clientY)
  // relativeY = 575 - 100 = 475
  // The pointer is beyond the bottom of the track, so the thumb clamps to its final position.
  expect(newState.deltaY).toBe(720)
})
