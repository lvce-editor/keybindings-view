import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('getRenderer - returns correct renderer for each diff type', () => {
  const oldState: KeyBindingsState = createDefaultState()
  const newState: KeyBindingsState = {
    ...oldState,
    columnWidth1: 10,
    columnWidth2: 20,
    columnWidth3: 30,
    uid: 1,
    value: 'abc',
  }

  const rendererForColumnWidth = GetRenderer.getRenderer(DiffType.RenderColumnWidth)
  expect(typeof rendererForColumnWidth).toBe('function')
  const columnWidthCommands = rendererForColumnWidth(oldState, newState)
  expect(Array.isArray(columnWidthCommands)).toBe(true)

  const rendererForKeyBindings = GetRenderer.getRenderer(DiffType.RenderKeyBindings)
  expect(typeof rendererForKeyBindings).toBe('function')
  const safeState = {
    ...newState,
    finalDeltaY: 100,
    height: 200,
    itemHeight: 10,
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
    searchHeaderHeight: 30,
    tableHeaderHeight: 20,
  }
  const keyBindingsCommands = rendererForKeyBindings(oldState, safeState)
  expect(Array.isArray(keyBindingsCommands)).toBe(true)

  const rendererForValue = GetRenderer.getRenderer(DiffType.RenderValue)
  expect(typeof rendererForValue).toBe('function')
  const valueCommands = rendererForValue(oldState, newState)
  expect(Array.isArray(valueCommands)).toBe(true)

  const rendererForFocus = GetRenderer.getRenderer(DiffType.RenderFocus)
  expect(typeof rendererForFocus).toBe('function')
  const focusCommands = rendererForFocus(oldState, newState)
  expect(Array.isArray(focusCommands)).toBe(true)

  const rendererForFocusContext = GetRenderer.getRenderer(DiffType.RenderFocusContext)
  expect(typeof rendererForFocusContext).toBe('function')
  const focusContextCommands = rendererForFocusContext(oldState, newState)
  expect(Array.isArray(focusContextCommands)).toBe(true)

  const rendererForWhenExpressionValue = GetRenderer.getRenderer(DiffType.RenderWhenExpressionValue)
  expect(typeof rendererForWhenExpressionValue).toBe('function')
  const whenExpressionValueCommands = rendererForWhenExpressionValue(oldState, { ...newState, whenExpressionText: 'x' })
  expect(Array.isArray(whenExpressionValueCommands)).toBe(true)
})

test('getRenderer - unknown renderer throws', () => {
  expect(() => GetRenderer.getRenderer(999)).toThrow('unknown renderer')
})
