import { expect, test } from '@jest/globals'
import * as GetSavedValue from '../src/parts/GetSavedValue/GetSavedValue.ts'

test('getSavedValue - with value', () => {
  const savedState = {
    value: 'test',
  }
  expect(GetSavedValue.getSavedValue(savedState)).toBe('test')
})

test('getSavedValue - without value', () => {
  const savedState = {}
  expect(GetSavedValue.getSavedValue(savedState)).toBe('')
})

test('getSavedValue - with null', () => {
  const savedState = null
  expect(GetSavedValue.getSavedValue(savedState)).toBe('')
})

test('getSavedValue - with undefined', () => {
  const savedState = undefined
  expect(GetSavedValue.getSavedValue(savedState)).toBe('')
})
