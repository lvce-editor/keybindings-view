import { expect, test } from '@jest/globals'
import * as GetMenuEntries from '../src/parts/GetMenuEntries/GetMenuEntries.ts'

test('getMenuEntries', () => {
  expect(GetMenuEntries.getMenuEntries()).toBeDefined()
})
