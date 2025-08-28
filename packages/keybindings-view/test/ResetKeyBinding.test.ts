import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ResetKeyBinding from '../src/parts/ResetKeyBinding/ResetKeyBinding.ts'

test('resetKeyBinding - returns same state', () => {
  const state = createDefaultState()
  const result = ResetKeyBinding.resetKeyBinding(state)
  expect(result).toBe(state)
})
