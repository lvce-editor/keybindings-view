import { expect, test } from '@jest/globals'
import * as KeyCode from '../src/parts/KeyCode/KeyCode.js'
import * as ParseKeyBindings from '../src/parts/ParseKeyBindings/ParseKeyBindings.js'

test('parseKeyBindings', () => {
  const keyBindings = [
    {
      key: KeyCode.Enter,
      command: 'EditorCompletion.selectCurrent',
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
