import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'

test('getRenderer - returns correct renderer for each diff type', () => {
  const oldState: KeyBindingsState = createDefaultState()
  const newState: KeyBindingsState = { ...oldState, uid: 1, columnWidth1: 10, columnWidth2: 20, columnWidth3: 30, value: 'abc' }

  const r1 = GetRenderer.getRenderer(DiffType.RenderColumnWidth)
  expect(typeof r1).toBe('function')
  const c1 = r1(oldState, newState)
  expect(Array.isArray(c1)).toBe(true)

  const r2 = GetRenderer.getRenderer(DiffType.RenderKeyBindings)
  expect(typeof r2).toBe('function')
  const safeState = {
    ...newState,
    height: 200,
    tableHeaderHeight: 20,
    searchHeaderHeight: 30,
    itemHeight: 10,
    finalDeltaY: 100,
    items: [{}, {}, {}] as any[],
  }
  const c2 = r2(oldState, safeState)
  expect(Array.isArray(c2)).toBe(true)

  const r3 = GetRenderer.getRenderer(DiffType.RenderValue)
  expect(typeof r3).toBe('function')
  const c3 = r3(oldState, newState)
  expect(Array.isArray(c3)).toBe(true)

  const r4 = GetRenderer.getRenderer(DiffType.RenderFocus)
  expect(typeof r4).toBe('function')
  const c4 = r4(oldState, newState)
  expect(Array.isArray(c4)).toBe(true)

  const r5 = GetRenderer.getRenderer(DiffType.RenderFocusContext)
  expect(typeof r5).toBe('function')
  const c5 = r5(oldState, newState)
  expect(Array.isArray(c5)).toBe(true)

  const r6 = GetRenderer.getRenderer(DiffType.RenderWhenExpressionValue)
  expect(typeof r6).toBe('function')
  const c6 = r6(oldState, { ...newState, whenExpressionText: 'x' })
  expect(Array.isArray(c6)).toBe(true)
})

test('getRenderer - unknown renderer throws', () => {
  expect(() => GetRenderer.getRenderer(999)).toThrow('unknown renderer')
})
