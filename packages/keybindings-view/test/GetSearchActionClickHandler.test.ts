import { expect, test } from '@jest/globals'
import * as GetSearchActionClickHandler from '../src/parts/GetSearchActionClickHandler/GetSearchActionClickHandler.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

const getName = (fn: unknown): string => {
  return typeof fn === 'function' ? 'function' : typeof fn
}

test('getSearchActionClickHandler - returns handler for ClearSearchInput', () => {
  const fn = GetSearchActionClickHandler.getSearchActionClickHandler(InputName.ClearSearchInput)
  expect(getName(fn)).toBe('function')
})

test('getSearchActionClickHandler - returns handler for RecordKeys', () => {
  const fn = GetSearchActionClickHandler.getSearchActionClickHandler(InputName.RecordKeys)
  expect(getName(fn)).toBe('function')
})

test('getSearchActionClickHandler - returns handler for SortByPrecedence', () => {
  const fn = GetSearchActionClickHandler.getSearchActionClickHandler(InputName.SortByPrecedence)
  expect(getName(fn)).toBe('function')
})

test('getSearchActionClickHandler - unknown name throws', () => {
  expect(() => GetSearchActionClickHandler.getSearchActionClickHandler('unknown')).toThrow('Unexpected handler unknown')
})
