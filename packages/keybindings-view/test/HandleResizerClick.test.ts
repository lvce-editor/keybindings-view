import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleResizerClick from '../src/parts/HandleResizerClick/HandleResizerClick.ts'
import { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'

test('handleResizerClick - sets resizerDownId', () => {
  const state: KeyBindingsState = createDefaultState()
  const newState = HandleResizerClick.handleResizerClick(state, 2, 100)
  expect(newState.resizerDownId).toBe(2)
})
