import { expect, test } from '@jest/globals'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import * as ParseKeyBindings from '../src/parts/ParseKeyBindings/ParseKeyBindings.ts'

test('parseKeyBindings', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.selectCurrent',
      key: KeyCode.Enter,
      when: 'focus.editorCompletions',
    },
  ]
  expect(ParseKeyBindings.parseKeyBindings(keyBindings)).toEqual([
    {
      command: 'EditorCompletion.selectCurrent',
      isAlt: false,
      isCtrl: false,
      isShift: false,
      key: 'Enter',
      rawKey: 3,
      source: 'System',
      when: 'focus.editorCompletions',
    },
  ])
})

test('parseKeyBindings - extension command', () => {
  const keyBindings = [
    {
      args: ['eslint.executeAutofix'],
      command: 'ExtensionHost.executeCommand',
      key: KeyCode.Enter,
    },
  ]
  expect(ParseKeyBindings.parseKeyBindings(keyBindings)).toEqual([
    {
      args: ['eslint.executeAutofix'],
      command: 'eslint.executeAutofix',
      isAlt: false,
      isCtrl: false,
      isShift: false,
      key: 'Enter',
      rawKey: 3,
      source: 'System',
    },
  ])
})

test('parseKeyBindings - extension command without command argument', () => {
  const keyBindings = [
    {
      command: 'ExtensionHost.executeCommand',
      key: KeyCode.Enter,
    },
  ]
  expect(ParseKeyBindings.parseKeyBindings(keyBindings)[0].command).toBe('ExtensionHost.executeCommand')
})

test('parseKeyBindings - extension command with invalid command argument', () => {
  const keyBindings = [
    {
      args: [1],
      command: 'ExtensionHost.executeCommand',
      key: KeyCode.Enter,
    },
  ]
  expect(ParseKeyBindings.parseKeyBindings(keyBindings)[0].command).toBe('ExtensionHost.executeCommand')
})
