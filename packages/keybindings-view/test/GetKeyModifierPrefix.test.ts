import { expect, test } from '@jest/globals'
import * as GetKeyModifierPrefix from '../src/parts/GetKeyModifierPrefix/GetKeyModifierPrefix.ts'

test('getKeyModifierPrefix - none', () => {
  expect(GetKeyModifierPrefix.getKeyModifierPrefix(false, false, false, false)).toBe('')
})

test('getKeyModifierPrefix - ctrl', () => {
  expect(GetKeyModifierPrefix.getKeyModifierPrefix(false, true, false, false)).toBe('Ctrl+')
})

test('getKeyModifierPrefix - alt', () => {
  expect(GetKeyModifierPrefix.getKeyModifierPrefix(true, false, false, false)).toBe('Alt+')
})

test('getKeyModifierPrefix - shift', () => {
  expect(GetKeyModifierPrefix.getKeyModifierPrefix(false, false, true, false)).toBe('Shift+')
})

test('getKeyModifierPrefix - ctrl+alt+shift', () => {
  expect(GetKeyModifierPrefix.getKeyModifierPrefix(true, true, true, false)).toBe('Ctrl+Alt+Shift+')
})

