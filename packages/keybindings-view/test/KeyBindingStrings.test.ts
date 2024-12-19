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

test('pressDesiredKeyCombinationThenPressEnter', () => {
  expect(KeyBindingStrings.pressDesiredKeyCombinationThenPressEnter()).toBe('Press Desired Key Combination, Then Press Enter')
})

test('resultsWillUpdateAsYouType', () => {
  expect(KeyBindingStrings.resultsWillUpdateAsYouType()).toBe('Results will update as you type')
})

test('copy', () => {
  expect(KeyBindingStrings.copy()).toBe('Copy')
})

test('copyCommandId', () => {
  expect(KeyBindingStrings.copyCommandId()).toBe('Copy Command ID')
})

test('copyCommandTitle', () => {
  expect(KeyBindingStrings.copyCommandTitle()).toBe('Copy Command Title')
})

test('changeKeyBinding', () => {
  expect(KeyBindingStrings.changeKeyBinding()).toBe('Change Keybinding...')
})

test('addKeyBinding', () => {
  expect(KeyBindingStrings.addKeyBinding()).toBe('Add Keybinding...')
})

test('removeKeyBinding', () => {
  expect(KeyBindingStrings.removeKeyBinding()).toBe('Remove Keybinding...')
})

test('resetKeyBinding', () => {
  expect(KeyBindingStrings.resetKeyBinding()).toBe('Reset Keybinding')
})

test('changeWhenExpression', () => {
  expect(KeyBindingStrings.changeWhenExpression()).toBe('Change When Expression')
})

test('showSameKeyBindings', () => {
  expect(KeyBindingStrings.showSameKeyBindings()).toBe('Show Same Keybindings')
})
