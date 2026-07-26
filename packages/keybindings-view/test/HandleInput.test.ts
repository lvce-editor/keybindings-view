import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleInput from '../src/parts/HandleInput/HandleInput.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('handleInput - filters items and sets value and focus', () => {
  const parsed = [makeParsedKeyBinding({ command: 'a', key: 'A' }), makeParsedKeyBinding({ command: 'b', key: 'B' })]
  const state: KeyBindingsState = { ...createDefaultState(), maxVisibleItems: 10, parsedKeyBindings: parsed }
  const result = HandleInput.handleInput(state, 'a')
  expect(result.value).toBe('a')
  expect(result.items.length).toBeGreaterThan(0)
  expect(result.maxLineY).toBeGreaterThan(0)
})

test('handleInput - recording keys: filters by exact keybinding', () => {
  const matching = makeParsedKeyBinding({ command: 'matching', isCtrl: true, key: 'v' })
  const other = makeParsedKeyBinding({ command: 'other', key: 'x' })
  const state: KeyBindingsState = {
    ...createDefaultState(),
    isRecordingKeys: true,
    maxVisibleItems: 10,
    parsedKeyBindings: [matching, other],
  }
  const result = HandleInput.handleInput(state, 'Ctrl+V')
  expect(result.value).toBe('Ctrl+V')
  expect(result.items).toEqual([{ ...matching, commandMatches: [], keyMatches: [] }])
})
