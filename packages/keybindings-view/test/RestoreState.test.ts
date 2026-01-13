import { expect, test } from '@jest/globals'
import * as RestoreState from '../src/parts/RestoreState/RestoreState.ts'

test('restoreState - restores value, flags and focus', () => {
  const savedState = {
    focus: 2,
    isRecordingKeys: true,
    isSortingByPrecedence: true,
    selectedIndex: 5,
    value: 'abc',
  }
  const restored = RestoreState.restoreState(savedState)
  expect(restored).toEqual({
    focus: 2,
    isRecordingKeys: true,
    isSortingByPrecedence: true,
    savedValue: 'abc',
    selectedIndex: 5,
  })
})
