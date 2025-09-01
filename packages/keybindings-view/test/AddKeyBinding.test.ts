import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as AddKeyBinding from '../src/parts/AddKeyBinding/AddKeyBinding.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('addKeyBinding - returns same state (no-op)', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    value: 'x',
  }

  const result: KeyBindingsState = AddKeyBinding.addKeyBinding(state)

  expect(result).toBe(state)
})

