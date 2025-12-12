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
      isCtrl: false,
      isShift: false,
      key: 'Enter',
      rawKey: 3,
      when: 'focus.editorCompletions',
    },
  ])
})
