import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as HandleInputFocus from '../src/parts/HandleInputFocus/HandleInputFocus.ts'

test('handleInputFocus - sets focus to input', () => {
  const s = createDefaultState()
  const r = HandleInputFocus.handleInputFocus(s)
  expect(r.focus).toBe(FocusKey.Input)
})
