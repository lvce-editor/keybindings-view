import { expect, test } from '@jest/globals'
import { KeyBindingError } from '../src/parts/KeyBindingError/KeyBindingError.ts'

test('KeyBindingError - name and message', () => {
  const error = new KeyBindingError('oops')
  expect(error).toBeInstanceOf(Error)
  expect(error.name).toBe('KeyBindingError')
  expect(error.message).toBe('oops')
})
