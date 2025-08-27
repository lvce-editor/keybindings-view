import { expect, test } from '@jest/globals'
import { renderValue } from '../src/parts/GetRenderer/RenderValue.ts'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'

test('renderValue', () => {
  const oldState: KeyBindingsState = {} as unknown as KeyBindingsState
  const newState: KeyBindingsState = {
    value: 'abc',
  } as unknown as KeyBindingsState

  const result = renderValue(oldState, newState)

  expect(result).toEqual(['setValue', 'abc'])
})
