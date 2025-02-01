import { expect, test } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.ts'
import * as KeyBindingsStates from '../src/parts/KeyBindingsStates/KeyBindingsStates.ts'
import * as ToggleRecordingKeys from '../src/parts/ToggleRecordingKeys/ToggleRecordingKeys.ts'

test('toggles recording keys from false to true', () => {
  // Create a valid initial state
  Create.create(1, '', 0, 0, 0, 0, 0)
  const { oldState } = KeyBindingsStates.get(1)

  // Test the toggle
  const newState = ToggleRecordingKeys.toggleRecordingKeys(oldState)
  expect(newState.isRecordingKeys).toBe(true)
})

test('toggles recording keys from true to false', () => {
  // Create a valid initial state with recording enabled
  Create.create(1, '', 0, 0, 0, 0, 0)
  const { oldState } = KeyBindingsStates.get(1)

  const state = {
    ...oldState,
    isRecordingKeys: true,
  }

  // Test the toggle
  const newState = ToggleRecordingKeys.toggleRecordingKeys(state)
  expect(newState.isRecordingKeys).toBe(false)
})
