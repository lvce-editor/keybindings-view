import { expect, test } from '@jest/globals'
import * as ListFocusIndexScrollDown from '../src/parts/ListFocusIndexScrollDown/ListFocusIndexScrollDown.ts'

interface ListState<T> {
  readonly deltaY: number
  readonly focused: boolean
  readonly focusedIndex: number
  readonly headerHeight: number
  readonly height: number
  readonly itemHeight: number
  readonly items: readonly T[]
  readonly maxLineY: number
  readonly minLineY: number
  readonly selectedIndex: number
}

test('focusIndexScrollDown - scrolls when index is below viewport end', () => {
  const state: ListState<number> = {
    deltaY: 0,
    focused: false,
    focusedIndex: 0,
    headerHeight: 10,
    height: 60, // listHeight = 50 => fittingItems = ceil(50/10)+1 = 6
    itemHeight: 10,
    items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    maxLineY: 5,
    minLineY: 0,
    selectedIndex: 0,
  }
  const res = ListFocusIndexScrollDown.focusIndexScrollDown(state, 5, 50, 10, state.items.length)
  expect(res.focusedIndex).toBe(5)
  // newMaxLineY = min(index+1, itemsLen) = 6; newMinLineY = max(6-6, 0) = 0
  expect(res.minLineY).toBe(0)
  expect(res.maxLineY).toBe(6)
  // itemsLength >= fittingItems -> newDeltaY = newMinLineY * itemHeight - (listHeight % itemHeight) + itemHeight
  expect(res.deltaY).toBe(10)
  expect(res.selectedIndex).toBe(5)
  expect(res.focused).toBe(true)
})

test('focusIndexScrollDown - when all items fit, minLineY stays at 0 and deltaY formula applied', () => {
  const state: ListState<number> = {
    deltaY: 0,
    focused: false,
    focusedIndex: 0,
    headerHeight: 0,
    height: 20, // listHeight=20 => fittingItems=ceil(20/10)+1 = 3; itemsLength=3
    itemHeight: 10,
    items: [0, 1, 2],
    maxLineY: 2,
    minLineY: 0,
    selectedIndex: 0,
  }
  const res = ListFocusIndexScrollDown.focusIndexScrollDown(state, 1, 20, 10, state.items.length)
  expect(res.minLineY).toBe(0)
  // newMaxLineY = min(index+1, itemsLen) = 2
  expect(res.maxLineY).toBe(2)
  // itemsLength < fittingItems ? 0 : newMinLineY*itemHeight - (listHeight%itemHeight) + itemHeight => 0 - 0 + 10 = 10
  expect(res.deltaY).toBe(10)
})
