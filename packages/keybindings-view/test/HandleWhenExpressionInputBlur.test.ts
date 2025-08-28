import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleWhenExpressionInputBlur from '../src/parts/HandleWhenExpressionInputBlur/HandleWhenExpressionInputBlur.ts'

test('handleWhenexpressionInputBlur - cancels editing flag', () => {
  const state: KeyBindingsState = { ...createDefaultState(), editingWhenExpression: true }
  const result = HandleWhenExpressionInputBlur.handleWhenexpressionInputBlur(state)
  expect(result.editingWhenExpression).toBe(false)
})
