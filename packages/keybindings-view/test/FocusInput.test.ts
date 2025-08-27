import { expect, test } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.ts'
import * as FocusInput from '../src/parts/FocusInput/FocusInput.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as KeyBindingsStates from '../src/parts/KeyBindingsStates/KeyBindingsStates.ts'

test('focusInput', () => {
  Create.create(1, '', 0, 0, 0, 0, 0)
  const { oldState } = KeyBindingsStates.get(1)
  const newState = FocusInput.focusInput(oldState)
  expect(newState.focus).toBe(FocusKey.Input)
})
