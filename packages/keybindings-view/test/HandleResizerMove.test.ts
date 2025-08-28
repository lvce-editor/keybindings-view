import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleResizerMove from '../src/parts/HandleResizerMove/HandleResizerMove.ts'

const base = {
  width: 500,
  contentPadding: 30,
  columnWidth1: 100,
  columnWidth2: 150,
  x: 10,
}

test('handleResizerMove - resizerDownId=1 adjusts columnWidth1 and columnWidth3', () => {
  const state: KeyBindingsState = { ...createDefaultState(), ...base, resizerDownId: 1 }
  const eventX = 200
  const newState = HandleResizerMove.handleResizerMove(state, eventX)
  const contentWidth = state.width - state.contentPadding // 470
  const expectedColumnWidth1 = eventX - state.contentPadding - state.x // 160
  const expectedColumnWidth3 = contentWidth - expectedColumnWidth1 - state.columnWidth2 // 160
  expect(newState.columnWidth1).toBe(expectedColumnWidth1)
  expect(newState.columnWidth3).toBe(expectedColumnWidth3)
})

test('handleResizerMove - resizerDownId!=1 adjusts columnWidth2 and columnWidth3', () => {
  const state = { ...createDefaultState(), ...base, resizerDownId: 2 }
  const eventX = 350
  const newState = HandleResizerMove.handleResizerMove(state, eventX)
  const contentWidth = state.width - state.contentPadding // 470
  const expectedColumnWidth3 = contentWidth - (eventX - state.contentPadding - state.x)
  const expectedColumnWidth2 = contentWidth - expectedColumnWidth3 - state.columnWidth1
  expect(newState.columnWidth3).toBe(expectedColumnWidth3)
  expect(newState.columnWidth2).toBe(expectedColumnWidth2)
})

