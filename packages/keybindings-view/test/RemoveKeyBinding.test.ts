import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RemoveKeyBinding from '../src/parts/RemoveKeyBinding/RemoveKeyBinding.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('removeKeyBinding - removes the selected binding', () => {
  const item = makeParsedKeyBinding({ command: 'test.remove', rawKey: 1 })
  const state = {
    ...createDefaultState(),
    items: [item],
    maxVisibleItems: 10,
    parsedKeyBindings: [item],
    selectedIndex: 0,
  }
  const result = RemoveKeyBinding.removeKeyBinding(state)
  expect(result.parsedKeyBindings).toEqual([])
  expect(result.items).toEqual([])
  expect(result.selectedIndex).toBe(-1)
})
