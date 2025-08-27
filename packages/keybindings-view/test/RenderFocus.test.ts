import { expect, test } from '@jest/globals'
import { renderFocus } from '../src/parts/GetRenderer/RenderFocus.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'

test('renderFocus', () => {
  const oldState: KeyBindingsState = {} as unknown as KeyBindingsState
  const newState: KeyBindingsState = {} as unknown as KeyBindingsState

  const result = renderFocus(oldState, newState)

  expect(result).toEqual(['Viewlet.focusSelector', InputName.KeyBindingsFilter])
})
