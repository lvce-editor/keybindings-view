import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleScrollBarPointerDown } from '../src/parts/HandleScrollBarPointerDown/HandleScrollBarPointerDown.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

const createScrollableState = (): KeyBindingsState => {
  return {
    ...createDefaultState(),
    deltaY: 400,
    finalDeltaY: 800,
    height: 500,
    itemHeight: 24,
    items: Array.from({ length: 50 }, () => makeParsedKeyBinding()),
    maxVisibleItems: 20,
    scrollBarHeight: 50,
    y: 100,
  }
}

test('handleScrollBarPointerDown - starts dragging when the pointer is on the thumb', () => {
  const state = createScrollableState()

  const newState = handleScrollBarPointerDown(state, 0, 335)

  expect(newState.deltaY).toBe(400)
  expect(newState.handleOffset).toBe(10)
  expect(newState.scrollBarPointerDown).toBe(true)
})

test('handleScrollBarPointerDown - moves the thumb when the pointer is on the track', () => {
  const state = createScrollableState()

  const newState = handleScrollBarPointerDown(state, 0, 200)

  expect(newState.deltaY).toBeCloseTo(133.3333, 4)
  expect(newState.handleOffset).toBe(25)
  expect(newState.scrollBarPointerDown).toBe(true)
})
