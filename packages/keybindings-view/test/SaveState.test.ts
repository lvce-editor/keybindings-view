import { expect, test } from '@jest/globals'
import * as SaveState from '../src/parts/SaveState/SaveState.ts'

test.skip('saveState', () => {
  const state: any = {
    value: 'test',
    otherProperty: 123,
    anotherProperty: 'abc',
  }
  expect(SaveState.saveState(state)).toEqual({
    value: 'test',
  })
})
