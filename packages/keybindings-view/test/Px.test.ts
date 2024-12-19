import { expect, test } from '@jest/globals'
import * as Px from '../src/parts/Px/Px.ts'

test('px - converts number to pixel string', () => {
  expect(Px.px(10)).toBe('10px')
})

test('px - handles zero', () => {
  expect(Px.px(0)).toBe('0px')
})

test('px - handles negative numbers', () => {
  expect(Px.px(-5)).toBe('-5px')
})
