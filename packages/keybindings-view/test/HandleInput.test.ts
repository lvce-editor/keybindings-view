import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleInput from '../src/parts/HandleInput/HandleInput.ts'

test('handleInput - filters items and sets value and focus', () => {
  const parsed = [
    { command: 'a', key: 'A' },
    { command: 'b', key: 'B' },
  ]
  const s: KeyBindingsState = { ...createDefaultState(), parsedKeyBindings: parsed, maxVisibleItems: 10 }
  const r = HandleInput.handleInput(s, 'a')
  expect(r.value).toBe('a')
  expect(r.items.length).toBeGreaterThan(0)
  expect(r.maxLineY).toBeGreaterThan(0)
})
