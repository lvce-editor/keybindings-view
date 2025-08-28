import { expect, test } from '@jest/globals'
import { KeyBindingError } from '../src/parts/KeyBindingError/KeyBindingError.ts'

test('KeyBindingError - name and message', () => {
  const err = new KeyBindingError('oops')
  expect(err).toBeInstanceOf(Error)
  expect(err.name).toBe('KeyBindingError')
  expect(err.message).toBe('oops')
})
