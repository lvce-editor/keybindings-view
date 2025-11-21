import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleEscape from '../src/parts/HandleEscape/HandleEscape.ts'

test.skip('handleEscape - when not recording returns same state', () => {
  const state: KeyBindingsState = createDefaultState()
  const result = HandleEscape.handleEscape(state)
  expect(result).toBe(state)
})

test('handleEscape - when recording stops recording', () => {
  const state: KeyBindingsState = { ...createDefaultState(), isRecordingKeys: true }
  const result = HandleEscape.handleEscape(state)
  expect(result.isRecordingKeys).toBe(false)
})
