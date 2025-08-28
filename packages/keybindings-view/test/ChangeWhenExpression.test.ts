import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as ChangeWhenExpression from '../src/parts/ChangeWhenExpression/ChangeWhenExpression.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('changeWhenExpression - no selected item returns same state', () => {
  const state: KeyBindingsState = createDefaultState()
  const result = ChangeWhenExpression.changeWhenExpression(state)
  expect(result).toBe(state)
})

test('changeWhenExpression - sets flags and text when item selected', () => {
  const state: KeyBindingsState = { ...createDefaultState(), items: [makeParsedKeyBinding({ command: 'a', key: 'X', when: 1 })], selectedIndex: 0 }
  const result = ChangeWhenExpression.changeWhenExpression(state)
  expect(result.editingWhenExpression).toBe(true)
  expect(typeof result.whenExpressionText).toBe('string')
})
