import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
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
  ]
}
