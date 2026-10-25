import { expect, test } from '@jest/globals'
import { WhenExpression } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleEscape from '../src/parts/HandleEscape/HandleEscape.ts'

test('handleEscape - when not recording focuses the table', () => {
  const state: KeyBindingsState = createDefaultState()
  const result = HandleEscape.handleEscape(state)
  expect(result).toEqual({
    ...state,
    focus: WhenExpression.FocusKeyBindingsTable,
    focusedIndex: -1,
  })
})

test('handleEscape - when recording stops recording', () => {
  const state: KeyBindingsState = { ...createDefaultState(), isRecordingKeys: true }
  const result = HandleEscape.handleEscape(state)
  expect(result.isRecordingKeys).toBe(false)
})
