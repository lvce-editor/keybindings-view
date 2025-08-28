import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SortByPrecedence from '../src/parts/SortByPrecedence/SortByPrecedence.ts'

test('sortByPrecedence - toggles flag and sorts', () => {
  const items = [
    { command: 'b', when: 0 },
    { command: 'a', when: 10 },
  ]
  const state: KeyBindingsState = { ...createDefaultState(), items }
  const firstResult = SortByPrecedence.sortByPrecedence(state)
  expect(firstResult.isSortingByPrecedence).toBe(true)
  const secondResult = SortByPrecedence.sortByPrecedence(firstResult)
  expect(secondResult.isSortingByPrecedence).toBe(false)
})
