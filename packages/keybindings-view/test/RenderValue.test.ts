import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { renderValue } from '../src/parts/GetRenderer/RenderValue.ts'

test('renderValue', () => {
  const oldState: KeyBindingsState = {} as unknown as KeyBindingsState
  const newState: KeyBindingsState = {
    uid: 1,
    value: 'abc',
  } as unknown as KeyBindingsState

  const result = renderValue(oldState, newState)

  expect(result).toEqual(['setValue', 1, 'abc'])
})
