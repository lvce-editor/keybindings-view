import { expect, test } from '@jest/globals'
import type { Dimensions } from '../src/parts/Dimensions/Dimensions.ts'
import * as Resize from '../src/parts/Resize/Resize.ts'

test.skip('resize - basic dimensions', () => {
  const state = {
    contentPadding: 20,
    width: 300,
  } as any
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
    columnWidth1: 193.33333333333334,
    columnWidth2: 193.33333333333334,
    columnWidth3: 193.33333333333334,
  })
})

test.skip('resize - zero width', () => {
  const state = {
    contentPadding: 10,
    width: 100,
  } as any
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
    columnWidth3: -3.3333333333333335,
  })
})

test.skip('resize - small width', () => {
  const state = {
    contentPadding: 30,
    width: 200,
  } as any
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
    columnWidth3: 20,
  })
})

test.skip('resize - large width', () => {
  const state = {
    contentPadding: 50,
    width: 500,
  } as any
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
    columnWidth3: 383.3333333333333,
  })
})
