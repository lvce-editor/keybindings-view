import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SaveState from '../src/parts/SaveState/SaveState.ts'

test('saves state with selected tab and feature', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    selectedIndex: 3,
  }
  const savedState = SaveState.saveState(state)
  expect(savedState).toEqual({
    value: '',
    isRecordingKeys: false,
    isSortingByPrecedence: false,
    focus: 0,
    selectedIndex: 3,
    recordingKeysLabelWidth: 0,
  })
})
