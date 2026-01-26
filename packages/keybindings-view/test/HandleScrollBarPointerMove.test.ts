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
  const state: KeyBindingsState = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    height: 500,
    scrollBarHeight: 50,
    scrollBarPointerDown: true,
    y: 100,
  }
  const clientY = 200
  const newState = HandleScrollBarPointerMove.handleScrollBarPointerMove(state, clientY)
  // relativeY = 200 - 100 = 100
  // percent = (100 - 25) / (500 - 50) = 75 / 450 = 0.1667
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
  const state: KeyBindingsState = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    height: 500,
    scrollBarHeight: 50,
    scrollBarPointerDown: true,
    y: 100,
  }
  const clientY = 575
  const newState = HandleScrollBarPointerMove.handleScrollBarPointerMove(state, clientY)
  // relativeY = 575 - 100 = 475
  // percent = 1 (clicked at bottom, since 475 > 500 - 25 = 475)
  // newDeltaY = 1 * 1000 = 1000
  expect(newState.deltaY).toBe(1000)
})
