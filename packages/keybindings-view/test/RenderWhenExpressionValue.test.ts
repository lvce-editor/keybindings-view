import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderWhenExpressionValue } from '../src/parts/GetRenderer/RenderWhenExpressionValue.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('renderWhenExpressionValue - sets when expression input value', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), uid: 1, whenExpressionText: 'abc' }
  const result = renderWhenExpressionValue(oldState, newState)
  expect(result).toEqual(['Viewlet.setValueByName', 1, InputName.WhenExpression, 'abc'])
})
