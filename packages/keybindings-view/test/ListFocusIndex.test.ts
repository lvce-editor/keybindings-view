import { expect, test } from '@jest/globals'
import * as ListFocusIndex from '../src/parts/ListFocusIndex/ListFocusIndex.ts'

type ListT<T> = {
  readonly items: readonly T[]
  readonly focusedIndex: number
  readonly minLineY: number
  readonly maxLineY: number
  readonly itemHeight: number
  readonly headerHeight: number
  readonly height: number
}

type S<T> = ListT<T> & {
  readonly selectedIndex: number
  readonly focused: boolean
}

const makeState = (overrides: Partial<S<number>> = {}): S<number> => {
  const base: S<number> = {
    items: [0, 1, 2, 3, 4, 5],
    focusedIndex: -1,
    minLineY: 1,
    maxLineY: 4,
    itemHeight: 10,
    headerHeight: 0,
    height: 60,
    selectedIndex: -1,
    focused: false,
  }
  return { ...base, ...overrides }
}

test('focusIndex - empty items returns state', () => {
  const state = makeState({ items: [] })
  const result = ListFocusIndex.focusIndex(state, 0)
  expect(result).toBe(state)
})

test('focusIndex - index -1 sets unfocused item and focused true', () => {
  const state = makeState()
  const result = ListFocusIndex.focusIndex(state, -1)
  expect(result.focusedIndex).toBe(-1)
  expect(result.focused).toBe(true)
})

test('focusIndex - index less than minLineY+1 scrolls up', () => {
  const state = makeState({ minLineY: 2 })
  const result = ListFocusIndex.focusIndex(state, 2)
  expect(result.minLineY).toBe(2)
  expect(result.maxLineY).toBeGreaterThan(result.minLineY)
  expect(result.focusedIndex).toBe(2)
})

test('focusIndex - index >= maxLineY-1 scrolls down', () => {
  const state = makeState({ maxLineY: 3 })
  const result = ListFocusIndex.focusIndex(state, 2)
  expect(result.maxLineY).toBeGreaterThan(0)
  expect(result.focusedIndex).toBe(2)
})

test('focusIndex - index in view sets focus and selection', () => {
  const state = makeState({ minLineY: 1, maxLineY: 5 })
  const result = ListFocusIndex.focusIndex(state, 3)
  expect(result.focusedIndex).toBe(3)
  expect(result.selectedIndex).toBe(3)
  expect(result.focused).toBe(true)
})
