import { expect, test } from '@jest/globals'
import * as GetIndex from '../src/parts/GetIndex/GetIndex.ts'

test('getIndex - basic calculation', () => {
  const state = {
    minLineY: 10,
    y: 50,
    itemHeight: 20,
    tableHeaderHeight: 30,
    searchHeaderHeight: 40,
  } as any
  expect(GetIndex.getIndex(state, 0, 160)).toBe(12)
})

test('getIndex - zero offset', () => {
  const state = {
    minLineY: 0,
    y: 0,
    itemHeight: 20,
    tableHeaderHeight: 30,
    searchHeaderHeight: 40,
  } as any
  expect(GetIndex.getIndex(state, 0, 90)).toBe(1)
})

test('getIndex - negative relative position', () => {
  const state = {
    minLineY: 5,
    y: 100,
    itemHeight: 20,
    tableHeaderHeight: 30,
    searchHeaderHeight: 40,
  } as any
  expect(GetIndex.getIndex(state, 0, 150)).toBe(4)
})

test('getIndex - exact row boundary', () => {
  const state = {
    minLineY: 0,
    y: 0,
    itemHeight: 20,
    tableHeaderHeight: 30,
    searchHeaderHeight: 40,
  } as any
  expect(GetIndex.getIndex(state, 0, 110)).toBe(2)
})

test('getIndex - partial row', () => {
  const state = {
    minLineY: 0,
    y: 0,
    itemHeight: 20,
    tableHeaderHeight: 30,
    searchHeaderHeight: 40,
  } as any
  expect(GetIndex.getIndex(state, 0, 105)).toBe(1)
})
