import { expect, test } from '@jest/globals'
import * as GetKeyBindings from '../src/parts/GetKeyBindings/GetKeyBindings.ts'

test('getKeyBindings', () => {
  expect(GetKeyBindings.getKeyBindings()).toBeDefined()
})
