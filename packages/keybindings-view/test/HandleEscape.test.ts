import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleEscape from '../src/parts/HandleEscape/HandleEscape.ts'

test('handleEscape - when not recording returns same state', () => {
  const s = createDefaultState()
  const r = HandleEscape.handleEscape(s)
  expect(r).toBe(s)
})

test('handleEscape - when recording stops recording', () => {
  const s = { ...createDefaultState(), isRecordingKeys: true }
  const r = HandleEscape.handleEscape(s)
  expect(r.isRecordingKeys).toBe(false)
})
