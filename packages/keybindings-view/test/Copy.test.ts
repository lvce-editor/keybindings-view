import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as Copy from '../src/parts/Copy/Copy.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('copy - returns same state (no-op)', async () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    value: 'hello',
  }

  const result: KeyBindingsState = await Copy.copy(state)

  expect(result).toBe(state)
})

