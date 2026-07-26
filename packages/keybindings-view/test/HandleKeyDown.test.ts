import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleKeyDown from '../src/parts/HandleKeyDown/HandleKeyDown.ts'
import * as Key from '../src/parts/Key/Key.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('handleKeyDown - not recording: returns same state', () => {
  const state = createDefaultState()
  const newState = HandleKeyDown.handleKeyDown(state, false, false, false, 'a')
  expect(newState).toBe(state)
})

test('handleKeyDown - recording: appends key to value', () => {
  const state = { ...createDefaultState(), isRecordingKeys: true, value: 'Ctrl' }
  const newState = HandleKeyDown.handleKeyDown(state, false, false, false, 'k')
  expect(newState.value).toBe('Ctrl K')
})

test('handleKeyDown - recording: includes modifiers', () => {
  const state = { ...createDefaultState(), isRecordingKeys: true }
  const newState = HandleKeyDown.handleKeyDown(state, true, true, true, 'z')
  expect(newState.value).toBe('Ctrl+Alt+Shift+Z')
})

test('handleKeyDown - recording: preserves special key casing', () => {
  const state = { ...createDefaultState(), isRecordingKeys: true }
  const newState = HandleKeyDown.handleKeyDown(state, false, false, true, 'Tab')
  expect(newState.value).toBe('Shift+Tab')
})

test('handleKeyDown - recording: does not add a leading space', () => {
  const state = { ...createDefaultState(), isRecordingKeys: true }
  const newState = HandleKeyDown.handleKeyDown(state, false, false, false, 'k')
  expect(newState.value).toBe('K')
})

test('handleKeyDown - recording: filters by the recorded keybinding', () => {
  const matching = makeParsedKeyBinding({ command: 'matching', isCtrl: true, key: 'v' })
  const other = makeParsedKeyBinding({ command: 'other', key: 'x' })
  const state = {
    ...createDefaultState(),
    isRecordingKeys: true,
    maxVisibleItems: 10,
    parsedKeyBindings: [matching, other],
  }
  const newState = HandleKeyDown.handleKeyDown(state, false, true, false, 'v')
  expect(newState.items).toEqual([{ ...matching, commandMatches: [], keyMatches: [] }])
})

test('handleKeyDown - Escape: delegates to handleEscape', () => {
  const state = { ...createDefaultState(), isRecordingKeys: true }
  const newState = HandleKeyDown.handleKeyDown(state, false, false, false, Key.Escape)
  expect(newState.isRecordingKeys).toBe(false)
})
