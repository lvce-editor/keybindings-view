import { expect, test } from '@jest/globals'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import * as KeyModifier from '../src/parts/KeyModifier/KeyModifier.ts'
import * as ParseKeyBindingString from '../src/parts/ParseKeyBindingString/ParseKeyBindingString.ts'

test('parseKeyBindingString - parses modifiers and a digit', () => {
  expect(ParseKeyBindingString.parseKeyBindingString('Ctrl+Alt+Shift+9')).toBe(
    KeyModifier.CtrlCmd | KeyModifier.Alt | KeyModifier.Shift | KeyCode.Digit9,
  )
})

test('parseKeyBindingString - returns unknown for an unsupported key', () => {
  expect(ParseKeyBindingString.parseKeyBindingString('Ctrl+NotAKey')).toBe(KeyCode.Unknown)
})

test('parseKeyBindingString - parses plus and browser arrow key names', () => {
  expect(ParseKeyBindingString.parseKeyBindingString('Ctrl++')).toBe(KeyModifier.CtrlCmd | KeyCode.Plus)
  expect(ParseKeyBindingString.parseKeyBindingString('Shift+ArrowDown')).toBe(KeyModifier.Shift | KeyCode.DownArrow)
})

test('parseKeyBindingString - parses space', () => {
  expect(ParseKeyBindingString.parseKeyBindingString('Ctrl+ ')).toBe(KeyModifier.CtrlCmd | KeyCode.Space)
})
