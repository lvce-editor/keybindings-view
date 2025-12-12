import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as GetIndex from '../src/parts/GetIndex/GetIndex.ts'

test('getIndex - basic calculation', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    itemHeight: 20,
    items: Array(100),
    minLineY: 10,
    searchHeaderHeight: 40,
    tableHeaderHeight: 30,
    y: 50,
  }
  expect(GetIndex.getIndex(state, 0, 160)).toBe(12)
})

test('getIndex - zero offset', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    itemHeight: 20,
    items: Array(100),
    minLineY: 0,
    searchHeaderHeight: 40,
    tableHeaderHeight: 30,
    y: 0,
  }
  expect(GetIndex.getIndex(state, 0, 90)).toBe(1)
})

test('getIndex - negative relative position', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    itemHeight: 20,
    items: Array(100),
    minLineY: 5,
    searchHeaderHeight: 40,
    tableHeaderHeight: 30,
    y: 100,
  }
  expect(GetIndex.getIndex(state, 0, 150)).toBe(4)
})

test('getIndex - exact row boundary', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    itemHeight: 20,
    items: Array(100),
    minLineY: 0,
    searchHeaderHeight: 40,
    tableHeaderHeight: 30,
    y: 0,
  }
  expect(GetIndex.getIndex(state, 0, 110)).toBe(2)
})

test('getIndex - partial row', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    itemHeight: 20,
    items: Array(100),
    minLineY: 0,
    searchHeaderHeight: 40,
    tableHeaderHeight: 30,
    y: 0,
  }
  expect(GetIndex.getIndex(state, 0, 105)).toBe(1)
})
