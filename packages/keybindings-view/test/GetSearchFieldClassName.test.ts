import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetSearchFieldClassName from '../src/parts/GetSearchFieldClassName/GetSearchFieldClassName.ts'

test('getSearchFieldClassName - default enabled and unchecked', () => {
  const className = GetSearchFieldClassName.getSearchFieldClassName(false, true)
  expect(className).toBe(ClassNames.SearchFieldButton)
})

test('getSearchFieldClassName - checked', () => {
  const className = GetSearchFieldClassName.getSearchFieldClassName(true, true)
  expect(className).toBe(`${ClassNames.SearchFieldButton} ${ClassNames.SearchFieldButtonChecked}`)
})

test('getSearchFieldClassName - disabled (and unchecked)', () => {
  const className = GetSearchFieldClassName.getSearchFieldClassName(false, false)
  expect(className).toBe(`${ClassNames.SearchFieldButton} ${ClassNames.SearchFieldButtonDisabled}`)
})
