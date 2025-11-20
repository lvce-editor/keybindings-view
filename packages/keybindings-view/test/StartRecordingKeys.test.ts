import { expect, test } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.ts'
import * as KeyBindingsStates from '../src/parts/KeyBindingsStates/KeyBindingsStates.ts'
import * as StartRecordingKeys from '../src/parts/StartRecordingKeys/StartRecordingKeys.ts'

test('startRecordingKeys', async () => {
  Create.create(1, '', 0, 0, 0, 0, 0)
  const { oldState } = KeyBindingsStates.get(1)
  const newState = await StartRecordingKeys.startRecordingKeys(oldState)
  expect(newState.isRecordingKeys).toBe(true)
})
