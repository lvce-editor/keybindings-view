import { expect, test } from '@jest/globals'
import * as RestoreState from '../src/parts/RestoreState/RestoreState.ts'

test('restoreState - restores value, flags and focus', () => {
  const savedState = {
    value: 'abc',
    isRecordingKeys: true,
    isSortingByPrecedence: true,
    focus: 2,
    selectedIndex: 5,
  }
  const restored = RestoreState.restoreState(savedState)
  expect(restored).toEqual({
    savedValue: 'abc',
    isRecordingKeys: true,
    isSortingByPrecedence: true,
    focus: 2,
    selectedIndex: 5,
  })
})
