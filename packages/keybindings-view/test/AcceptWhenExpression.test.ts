import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as AcceptWhenExpression from '../src/parts/AcceptWhenExpression/AcceptWhenExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('acceptWhenExpression - turns off editingWhenExpression', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    editingWhenExpression: true,
  }

  const result: KeyBindingsState = AcceptWhenExpression.acceptWhenExpression(state)

  expect(result.editingWhenExpression).toBe(false)
})

test('acceptWhenExpression - keeps other state intact', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    editingWhenExpression: true,
    uid: 123,
    value: 'abc',
  }

  const result: KeyBindingsState = AcceptWhenExpression.acceptWhenExpression(state)

  expect(result.value).toBe('abc')
  expect(result.uid).toBe(123)
})
