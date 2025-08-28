import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as HandleInputFocus from '../src/parts/HandleInputFocus/HandleInputFocus.ts'

test('handleInputFocus - sets focus to input', () => {
  const state: KeyBindingsState = createDefaultState()
  const result = HandleInputFocus.handleInputFocus(state)
  expect(result.focus).toBe(FocusKey.Input)
})
