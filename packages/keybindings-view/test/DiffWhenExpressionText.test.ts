import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffWhenExpressionText from '../src/parts/DiffWhenExpressionText/DiffWhenExpressionText.ts'

const withFlags = (editingWhenExpression: boolean): KeyBindingsState => ({ ...createDefaultState(), editingWhenExpression })

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
