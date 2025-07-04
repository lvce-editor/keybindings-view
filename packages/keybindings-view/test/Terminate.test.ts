import { expect, test } from '@jest/globals'
import * as Terminate from '../src/parts/Terminate/Terminate.ts'

test('terminate calls globalThis.close', () => {
  let called = false
  const originalClose = globalThis.close
  globalThis.close = (): void => {
    called = true
  }
  Terminate.terminate()
  expect(called).toBe(true)
  globalThis.close = originalClose
})
