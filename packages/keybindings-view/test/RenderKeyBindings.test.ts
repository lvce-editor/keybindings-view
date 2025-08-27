import { expect, test } from '@jest/globals'
import { renderKeyBindings } from '../src/parts/GetRenderer/RenderKeyBindings.ts'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'

test('renderKeyBindings - basic shape', () => {
  const oldState: KeyBindingsState = {} as unknown as KeyBindingsState
  const newState: KeyBindingsState = {
    items: [],
    minLineY: 0,
    maxLineY: 0,
    selectedIndex: -1,
    columnWidth1: 100,
    columnWidth2: 200,
    columnWidth3: 300,
    finalDeltaY: 1,
    itemHeight: 20,
    height: 200,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
    isRecordingKeys: false,
    value: '',
    isSortingByPrecedence: false,
    minimumSliderSize: 20,
  } as unknown as KeyBindingsState

  const result = renderKeyBindings(oldState, newState)

  expect(result[0]).toBe('Viewlet.setDom2')
  expect(Array.isArray(result[1])).toBe(true)
})
