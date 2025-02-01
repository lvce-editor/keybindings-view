import { expect, test } from '@jest/globals'
import * as GetKeyBindings from '../src/parts/GetKeyBindings/GetKeyBindings.ts'
import * as KeyCode from '../src/parts/KeyCode/KeyCode.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('getKeyBindings', () => {
  expect(GetKeyBindings.getKeyBindings()).toEqual([
    {
      key: KeyCode.DownArrow,
      command: 'KeyBindings.focusNext',
      when: WhenExpression.FocusKeyBindingsTable,
    },
    {
      key: KeyCode.UpArrow,
      command: 'KeyBindings.focusPrevious',
      when: WhenExpression.FocusKeyBindingsTable,
    },
    {
      key: KeyCode.Home,
      command: 'KeyBindings.focusFirst',
      when: WhenExpression.FocusKeyBindingsTable,
    },
    {
      key: KeyCode.PageUp,
      command: 'KeyBindings.focusFirst',
      when: WhenExpression.FocusKeyBindingsTable,
    },
    {
      key: KeyCode.PageDown,
      command: 'KeyBindings.focusLast',
      when: WhenExpression.FocusKeyBindingsTable,
    },
    {
      key: KeyCode.End,
      command: 'KeyBindings.focusLast',
      when: WhenExpression.FocusKeyBindingsTable,
    },
    {
      key: KeyCode.Space,
      command: 'KeyBindings.selectCurrent',
      when: WhenExpression.FocusKeyBindingsTable,
    },
    {
      key: KeyCode.Enter,
      command: 'KeyBindings.selectCurrent',
      when: WhenExpression.FocusKeyBindingsTable,
    },
    {
      key: KeyCode.Home,
      command: 'KeyBindings.focusFirst',
      when: WhenExpression.FocusKeyBindingsTable,
    },
    {
      key: KeyCode.End,
      command: 'KeyBindings.focusLast',
      when: WhenExpression.FocusKeyBindingsTable,
    },
  ])
})
