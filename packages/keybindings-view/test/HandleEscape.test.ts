import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleEscape from '../src/parts/HandleEscape/HandleEscape.ts'
import { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'

test('handleEscape - when not recording returns same state', () => {
  const s: KeyBindingsState = createDefaultState()
  const r = HandleEscape.handleEscape(s)
  expect(r).toBe(s)
})

test('handleEscape - when recording stops recording', () => {
  const s: KeyBindingsState = { ...createDefaultState(), isRecordingKeys: true }
  const r = HandleEscape.handleEscape(s)
  expect(r.isRecordingKeys).toBe(false)
})
