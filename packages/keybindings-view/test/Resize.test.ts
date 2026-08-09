import { expect, test } from '@jest/globals'
import type { Dimensions } from '../src/parts/Dimensions/Dimensions.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Resize from '../src/parts/Resize/Resize.ts'

test('resize - basic dimensions', () => {
  const state = {
    ...createDefaultState(),
    contentPadding: 20,
    width: 300,
  }
  const dimensions: Dimensions = {
    height: 400,
    width: 600,
    x: 0,
    y: 0,
  }
  const newState = Resize.resize(state, dimensions)
  expect(newState).toMatchObject(dimensions)
  expect(newState.columnWidth1).toBeCloseTo(193.33333333333334)
  expect(newState.columnWidth2).toBeCloseTo(193.33333333333334)
  expect(newState.columnWidth3).toBeCloseTo(163.33333333333334)
})

test('resize - zero width', () => {
  const state = {
    ...createDefaultState(),
    contentPadding: 10,
    width: 100,
  }
  const dimensions: Dimensions = {
    height: 200,
    width: 0,
    x: 0,
    y: 0,
  }
  const newState = Resize.resize(state, dimensions)
  expect(newState).toMatchObject(dimensions)
  expect(newState.columnWidth1).toBeCloseTo(-3.3333333333333335)
  expect(newState.columnWidth2).toBeCloseTo(-3.3333333333333335)
  expect(newState.columnWidth3).toBeCloseTo(-33.333333333333336)
})

test('resize - small width', () => {
  const state = {
    ...createDefaultState(),
    contentPadding: 30,
    width: 200,
  }
  const dimensions: Dimensions = {
    height: 300,
    width: 90,
    x: 0,
    y: 0,
  }
  const newState = Resize.resize(state, dimensions)
  expect(newState).toMatchObject(dimensions)
  expect(newState.columnWidth1).toBe(20)
  expect(newState.columnWidth2).toBe(20)
  expect(newState.columnWidth3).toBe(-10)
})

test('resize - large width', () => {
  const state = {
    ...createDefaultState(),
    contentPadding: 50,
    width: 500,
  }
  const dimensions: Dimensions = {
    height: 800,
    width: 1200,
    x: 0,
    y: 0,
  }
  const newState = Resize.resize(state, dimensions)
  expect(newState).toMatchObject(dimensions)
  expect(newState.columnWidth1).toBeCloseTo(383.3333333333333)
  expect(newState.columnWidth2).toBeCloseTo(383.3333333333333)
  expect(newState.columnWidth3).toBeCloseTo(353.3333333333333)
})
