import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderFocus } from '../src/parts/GetRenderer/RenderFocus.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('renderFocus - defaults to KeyBindingsFilter selector', () => {
  const oldState: KeyBindingsState = { ...createDefaultState() }
  const newState: KeyBindingsState = { ...createDefaultState() }
  const result = renderFocus(oldState, newState)
  expect(result).toEqual(['Viewlet.focusSelector', 1, `[name="${InputName.KeyBindingsFilter}"]`])
})

test('renderFocus - when focus is WhenExpression uses WhenExpression selector', () => {
  const oldState: KeyBindingsState = { ...createDefaultState() }
  const newState: KeyBindingsState = { ...createDefaultState(), focus: WhenExpression.FocusKeyBindingsWhenExpression }
  const result = renderFocus(oldState, newState)
  expect(result).toEqual(['Viewlet.focusSelector', 1, `[name="${InputName.WhenExpression}"]`])
})
