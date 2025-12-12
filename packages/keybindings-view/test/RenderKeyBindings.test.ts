import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderKeyBindings } from '../src/parts/GetRenderer/RenderKeyBindings.ts'

test('renderKeyBindings - basic shape', () => {
  const oldState: KeyBindingsState = { ...createDefaultState() }
  const newState: KeyBindingsState = {
    ...createDefaultState(),
    columnWidth1: 100,
    columnWidth2: 200,
    columnWidth3: 300,
    finalDeltaY: 1,
    height: 200,
    isRecordingKeys: false,
    isSortingByPrecedence: false,
    itemHeight: 20,
    items: [],
    maxLineY: 0,
    minimumSliderSize: 20,
    minLineY: 0,
    searchHeaderHeight: 0,
    selectedIndex: -1,
    tableHeaderHeight: 0,
    value: '',
  }

  const result = renderKeyBindings(oldState, newState)

  expect(result[0]).toBe('Viewlet.setDom2')
  expect(result[1]).toBe(1)
  expect(Array.isArray(result[2])).toBe(true)
})
