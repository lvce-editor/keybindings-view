import { expect, test } from '@jest/globals'
import * as Resize from '../src/parts/Resize/Resize.ts'
import { Dimensions } from '../src/parts/Dimensions/Dimensions.ts'

test('resize - basic dimensions', () => {
  const state = {
    contentPadding: 20,
    width: 300,
  } as any
  const dimensions: Dimensions = {
    width: 600,
    height: 400,
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

test('resize - zero width', () => {
  const state = {
    contentPadding: 10,
    width: 100,
  } as any
  const dimensions: Dimensions = {
    width: 0,
    height: 200,
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

test('resize - small width', () => {
  const state = {
    contentPadding: 30,
    width: 200,
  } as any
  const dimensions: Dimensions = {
    width: 90,
    height: 300,
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

test('resize - large width', () => {
  const state = {
    contentPadding: 50,
    width: 500,
  } as any
  const dimensions: Dimensions = {
    width: 1200,
    height: 800,
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
