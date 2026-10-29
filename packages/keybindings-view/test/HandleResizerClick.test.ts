import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleResizerClick from '../src/parts/HandleResizerClick/HandleResizerClick.ts'

test('handleResizerClick - sets resizerDownId for the When/Source boundary', () => {
  const state: KeyBindingsState = createDefaultState()
  const newState = HandleResizerClick.handleResizerClick(state, 'ResizerThree', 100)
  expect(newState.resizerDownId).toBe(3)
})
