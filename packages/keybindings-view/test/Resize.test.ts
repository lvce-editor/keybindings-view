import { expect, test } from '@jest/globals'
import type { Dimensions } from '../src/parts/Dimensions/Dimensions.ts'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Resize from '../src/parts/Resize/Resize.ts'

test('resize - basic dimensions', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    columnWidth0: 20,
    contentPadding: 20,
    itemHeight: 20,
    searchHeaderHeight: 30,
    tableHeaderHeight: 20,
    width: 300,
  }
  const dimensions: Dimensions = {
    height: 400,
    width: 600,
    x: 0,
    y: 0,
  }
  const newState = Resize.resize(state, dimensions)
  expect(newState).toEqual({
    ...state,
    ...dimensions,
    columnWidth1: 193.333_333_333_333_34,
    columnWidth2: 193.333_333_333_333_34,
    columnWidth3: 173.333_333_333_333_34,
    maxVisibleItems: 17,
    resizerOneLeft: 213.333_333_333_333_34,
    resizerTwoLeft: 406.666_666_666_666_68,
    scrollBarHeight: 0,
    visibleItems: [],
  })
})

test('resize - zero width', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    columnWidth0: 10,
    contentPadding: 10,
    itemHeight: 20,
    searchHeaderHeight: 30,
    tableHeaderHeight: 20,
    width: 100,
  }
  const dimensions: Dimensions = {
    height: 200,
    width: 0,
    x: 0,
    y: 0,
  }
  const newState = Resize.resize(state, dimensions)
  expect(newState).toEqual({
    ...state,
    ...dimensions,
    columnWidth1: -3.3333333333333335,
    columnWidth2: -3.3333333333333335,
    columnWidth3: -13.333333333333334,
    maxVisibleItems: 7,
    resizerOneLeft: 6.666666666666666,
    resizerTwoLeft: 3.3333333333333326,
    scrollBarHeight: 0,
    visibleItems: [],
  })
})

test('resize - small width', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    columnWidth0: 30,
    contentPadding: 30,
    itemHeight: 20,
    searchHeaderHeight: 30,
    tableHeaderHeight: 20,
    width: 200,
  }
  const dimensions: Dimensions = {
    height: 300,
    width: 90,
    x: 0,
    y: 0,
  }
  const newState = Resize.resize(state, dimensions)
  expect(newState).toEqual({
    ...state,
    ...dimensions,
    columnWidth1: 20,
    columnWidth2: 20,
    columnWidth3: -10,
    maxVisibleItems: 12,
    resizerOneLeft: 50,
    resizerTwoLeft: 70,
    scrollBarHeight: 0,
    visibleItems: [],
  })
})

test('resize - large width', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    columnWidth0: 50,
    contentPadding: 50,
    itemHeight: 20,
    searchHeaderHeight: 30,
    tableHeaderHeight: 20,
    width: 500,
  }
  const dimensions: Dimensions = {
    height: 800,
    width: 1200,
    x: 0,
    y: 0,
  }
  const newState = Resize.resize(state, dimensions)
  expect(newState).toEqual({
    ...state,
    ...dimensions,
    columnWidth1: 383.3333333333333,
    columnWidth2: 383.3333333333333,
    columnWidth3: 333.3333333333333,
    maxVisibleItems: 37,
    resizerOneLeft: 433.3333333333333,
    resizerTwoLeft: 816.6666666666666,
    scrollBarHeight: 0,
    visibleItems: [],
  })
})
