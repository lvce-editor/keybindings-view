import { expect, test } from '@jest/globals'
import * as SortKeyBindings from '../src/parts/SortKeyBindings/SortKeyBindings.ts'

test('sortKeyBindings - by name when precedence is false', () => {
  const items = [{ command: 'b' }, { command: 'a' }]
  const sorted = SortKeyBindings.sortKeyBindings(items, false)
  expect(sorted.map((x) => x.command)).toEqual(['a', 'b'])
})

test('sortKeyBindings - by precedence when precedence is true', () => {
  const items = [
    { command: 'a', when: 0 },
    { command: 'b', when: 10 },
  ]
  const sorted = SortKeyBindings.sortKeyBindings(items, true)
  expect(sorted.map((x) => x.command)).toEqual(['b', 'a'])
})
