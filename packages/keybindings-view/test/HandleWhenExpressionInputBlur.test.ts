import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleWhenExpressionInputBlur from '../src/parts/HandleWhenExpressionInputBlur/HandleWhenExpressionInputBlur.ts'

test('handleWhenexpressionInputBlur - cancels editing flag', () => {
  const s = { ...createDefaultState(), editingWhenExpression: true }
  const r = HandleWhenExpressionInputBlur.handleWhenexpressionInputBlur(s)
  expect(r.editingWhenExpression).toBe(false)
})
