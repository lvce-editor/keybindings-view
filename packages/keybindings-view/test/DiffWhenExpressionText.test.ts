import { expect, test } from '@jest/globals'
import * as DiffWhenExpressionText from '../src/parts/DiffWhenExpressionText/DiffWhenExpressionText.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

const withFlags = (editingWhenExpression: boolean) => ({ ...createDefaultState(), editingWhenExpression })

test('isEqual - when editingWhenExpression true in old, treat equal', () => {
  const oldState = withFlags(true)
  const newState = withFlags(false)
  expect(DiffWhenExpressionText.isEqual(oldState, newState)).toBe(true)
})

test('isEqual - when newState not editing, treat equal', () => {
  const oldState = withFlags(false)
  const newState = withFlags(false)
  expect(DiffWhenExpressionText.isEqual(oldState, newState)).toBe(true)
})

test('isEqual - when transitioning to editing, not equal', () => {
  const oldState = withFlags(false)
  const newState = withFlags(true)
  expect(DiffWhenExpressionText.isEqual(oldState, newState)).toBe(false)
})
