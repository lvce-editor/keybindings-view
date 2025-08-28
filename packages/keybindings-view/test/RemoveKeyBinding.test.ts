import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RemoveKeyBinding from '../src/parts/RemoveKeyBinding/RemoveKeyBinding.ts'

test('removeKeyBinding - returns same state', () => {
  const s = createDefaultState()
  const r = RemoveKeyBinding.removeKeyBinding(s)
  expect(r).toBe(s)
})
