import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SortByPrecedence from '../src/parts/SortByPrecedence/SortByPrecedence.ts'
import { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'

test('sortByPrecedence - toggles flag and sorts', () => {
  const items = [
    { command: 'b', when: 0 },
    { command: 'a', when: 10 },
  ]
  const s: KeyBindingsState = { ...createDefaultState(), items }
  const r1 = SortByPrecedence.sortByPrecedence(s)
  expect(r1.isSortingByPrecedence).toBe(true)
  const r2 = SortByPrecedence.sortByPrecedence(r1)
  expect(r2.isSortingByPrecedence).toBe(false)
})
