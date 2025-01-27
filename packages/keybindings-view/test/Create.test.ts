import { expect, test } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.ts'
import * as KeyBindingsStates from '../src/parts/KeyBindingsStates/KeyBindingsStates.ts'

test('create', () => {
  const uid = 1
  const uri = ''
  const x = 0
  const y = 0
  const width = 0
  const height = 0
  const platform = 0
  Create.create(uid, uri, x, y, width, height, platform)
  expect(KeyBindingsStates.get(1)).toBeDefined()
})
