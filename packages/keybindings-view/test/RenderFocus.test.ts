import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { renderFocus } from '../src/parts/GetRenderer/RenderFocus.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('renderFocus', () => {
  const oldState: KeyBindingsState = {} as unknown as KeyBindingsState
  const newState: KeyBindingsState & { uid: number } = {
    uid: 1,
  } as unknown as KeyBindingsState & { uid: number }

  const result = renderFocus(oldState, newState)

  expect(result).toEqual(['Viewlet.focusSelector', 1, InputName.KeyBindingsFilter])
})
