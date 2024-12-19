import { expect, test } from '@jest/globals'
import * as MergeClassNames from '../src/parts/MergeClassNames/MergeClassNames.ts'

test('mergeClassNames - single class', () => {
  expect(MergeClassNames.mergeClassNames('class1')).toBe('class1')
})

test('mergeClassNames - multiple classes', () => {
  expect(MergeClassNames.mergeClassNames('class1', 'class2', 'class3')).toBe('class1 class2 class3')
})

test('mergeClassNames - with empty strings', () => {
  expect(MergeClassNames.mergeClassNames('class1', '', 'class2')).toBe('class1 class2')
})

test('mergeClassNames - with falsy values', () => {
  // @ts-ignore
  expect(MergeClassNames.mergeClassNames('class1', undefined, null, false, 'class2')).toBe('class1 class2')
})

test('mergeClassNames - all falsy values', () => {
  // @ts-ignore
  expect(MergeClassNames.mergeClassNames('', undefined, null, false)).toBe('')
})
