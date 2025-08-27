import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderFocus } from '../src/parts/GetRenderer/RenderFocus.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('renderFocus', () => {
  const oldState: KeyBindingsState = { ...createDefaultState() }
  const newState: KeyBindingsState = { ...createDefaultState() }

  const result = renderFocus(oldState, newState)

  expect(result).toEqual(['Viewlet.focusSelector', 1, InputName.KeyBindingsFilter])
})
