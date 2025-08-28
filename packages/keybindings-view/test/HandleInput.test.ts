import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleInput from '../src/parts/HandleInput/HandleInput.ts'

test('handleInput - filters items and sets value and focus', () => {
  const parsed = [
    { command: 'a', key: 'A' },
    { command: 'b', key: 'B' },
  ]
  const state: KeyBindingsState = { ...createDefaultState(), parsedKeyBindings: parsed, maxVisibleItems: 10 }
  const result = HandleInput.handleInput(state, 'a')
  expect(result.value).toBe('a')
  expect(result.items.length).toBeGreaterThan(0)
  expect(result.maxLineY).toBeGreaterThan(0)
})
