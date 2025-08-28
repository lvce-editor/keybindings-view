import { expect, test } from '@jest/globals'
import * as ChangeWhenExpression from '../src/parts/ChangeWhenExpression/ChangeWhenExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('changeWhenExpression - no selected item returns same state', () => {
  const state = createDefaultState()
  const r = ChangeWhenExpression.changeWhenExpression(state)
  expect(r).toBe(state)
})

test('changeWhenExpression - sets flags and text when item selected', () => {
  const state = { ...createDefaultState(), items: [{ command: 'a', key: 'X', when: 1 }], selectedIndex: 0 }
  const r = ChangeWhenExpression.changeWhenExpression(state)
  expect(r.editingWhenExpression).toBe(true)
  expect(typeof r.whenExpressionText).toBe('string')
})
