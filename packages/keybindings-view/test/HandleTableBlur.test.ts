import { expect, test } from '@jest/globals'
import { WhenExpression } from '@lvce-editor/constants'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as HandleTableBlur from '../src/parts/HandleTableBlur/HandleTableBlur.ts'

test('handleTableBlur - clears table focus', () => {
  const state = { ...createDefaultState(), focus: WhenExpression.FocusKeyBindingsTable, tableFocused: true }
  const result = HandleTableBlur.handleTableBlur(state)
  expect(result.focus).toBe(WhenExpression.FocusKeyBindingsTable)
  expect(result.tableFocused).toBe(false)
})

test('handleTableBlur - preserves another focus target', () => {
  const state = { ...createDefaultState(), focus: FocusKey.Input }
  expect(HandleTableBlur.handleTableBlur(state)).toBe(state)
})
