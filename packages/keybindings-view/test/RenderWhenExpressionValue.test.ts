import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderWhenExpressionValue } from '../src/parts/GetRenderer/RenderWhenExpressionValue.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('renderWhenExpressionValue - sets when expression input value', () => {
  const oldState: KeyBindingsState = createDefaultState()
  const newState: KeyBindingsState = { ...oldState, uid: 1, whenExpressionText: 'abc' }
  const result = renderWhenExpressionValue(oldState, newState)
  expect(result).toEqual(['Viewlet.setValueByName', 1, InputName.WhenExpression, 'abc'])
})
