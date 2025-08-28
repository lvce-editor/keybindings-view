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
  const s = makeState({ items: [] })
  const r = ListFocusIndex.focusIndex(s, 0)
  expect(r).toBe(s)
})

test('focusIndex - index -1 sets unfocused item and focused true', () => {
  const s = makeState()
  const r = ListFocusIndex.focusIndex(s, -1)
  expect(r.focusedIndex).toBe(-1)
  expect(r.focused).toBe(true)
})

test('focusIndex - index less than minLineY+1 scrolls up', () => {
  const s = makeState({ minLineY: 2 })
  const r = ListFocusIndex.focusIndex(s, 2)
  expect(r.minLineY).toBe(2)
  expect(r.maxLineY).toBeGreaterThan(r.minLineY)
  expect(r.focusedIndex).toBe(2)
})

test('focusIndex - index >= maxLineY-1 scrolls down', () => {
  const s = makeState({ maxLineY: 3 })
  const r = ListFocusIndex.focusIndex(s, 2)
  expect(r.maxLineY).toBeGreaterThan(0)
  expect(r.focusedIndex).toBe(2)
})

test('focusIndex - index in view sets focus and selection', () => {
  const s = makeState({ minLineY: 1, maxLineY: 5 })
  const r = ListFocusIndex.focusIndex(s, 3)
  expect(r.focusedIndex).toBe(3)
  expect(r.selectedIndex).toBe(3)
  expect(r.focused).toBe(true)
})
