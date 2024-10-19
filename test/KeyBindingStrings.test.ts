import * as KeyBindingStrings from '../src/parts/KeyBindingStrings/KeyBindingStrings.ts'
import { expect, test } from '@jest/globals'

test('keyBindings', () => {
  expect(KeyBindingStrings.keyBindings()).toBe('KeyBindings')
})

test('command', () => {
  expect(KeyBindingStrings.command()).toBe('Command')
})

test('when', () => {
  expect(KeyBindingStrings.when()).toBe('When')
})

test('key', () => {
  expect(KeyBindingStrings.key()).toBe('Key')
})

test('typeToSearchKeyBinding', () => {
  expect(KeyBindingStrings.typeToSearchKeyBindings()).toBe('Type to search in keybindings')
})
