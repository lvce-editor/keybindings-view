import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleKeyDown from '../src/parts/HandleKeyDown/HandleKeyDown.ts'
import * as Key from '../src/parts/Key/Key.ts'

test('handleKeyDown - not recording: returns same state', () => {
  const state = createDefaultState()
  const newState = HandleKeyDown.handleKeyDown(state, false, false, 'a')
  expect(newState).toBe(state)
})

test('handleKeyDown - recording: appends key to value', () => {
  const state = { ...createDefaultState(), isRecordingKeys: true, value: 'Ctrl' }
  const newState = HandleKeyDown.handleKeyDown(state, false, false, 'k')
  expect(newState.value).toBe('Ctrl k')
})

test('handleKeyDown - Escape: delegates to handleEscape', () => {
  const state = { ...createDefaultState(), isRecordingKeys: true }
  const newState = HandleKeyDown.handleKeyDown(state, false, false, Key.Escape)
  expect(newState.isRecordingKeys).toBe(false)
})

