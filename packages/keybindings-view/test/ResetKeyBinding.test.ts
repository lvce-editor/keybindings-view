import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ResetKeyBinding from '../src/parts/ResetKeyBinding/ResetKeyBinding.ts'

test('resetKeyBinding - returns same state', () => {
  const s = createDefaultState()
  const r = ResetKeyBinding.resetKeyBinding(s)
  expect(r).toBe(s)
})
