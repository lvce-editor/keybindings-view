import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderValue } from '../src/parts/GetRenderer/RenderValue.ts'

test('renderValue', () => {
  const oldState: KeyBindingsState = { ...createDefaultState() }
  const newState: KeyBindingsState = { ...createDefaultState(), value: 'abc' }

  const result = renderValue(oldState, newState)

  expect(result).toEqual(['setValue', 1, 'abc'])
})
