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
    columnWidth1: 193.333_333_333_333_34,
    columnWidth2: 193.333_333_333_333_34,
    columnWidth3: 193.333_333_333_333_34,
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
    columnWidth1: -3.333_333_333_333_333_5,
    columnWidth2: -3.333_333_333_333_333_5,
    columnWidth3: -3.333_333_333_333_333_5,
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
    columnWidth1: 383.333_333_333_333_3,
    columnWidth2: 383.333_333_333_333_3,
    columnWidth3: 383.333_333_333_333_3,
  })
})
