import { expect, test } from '@jest/globals'
import * as FilterKeyBindingsByKeyBinding from '../src/parts/FilterKeyBindingsByKeyBinding/FilterKeyBindingsByKeyBinding.ts'

test('filterKeyBindingsByKeyBinding - exact quoted key match', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.focusNext',
      key: 'Ctrl + Space',
      isCtrl: true,
      isShift: false,
    },
    {
      command: 'EditorCompletion.focusPrevious',
      key: 'Ctrl + ArrowUp',
      isCtrl: true,
      isShift: false,
    },
  ]
  const value = '"Ctrl + Space"'
  expect(FilterKeyBindingsByKeyBinding.filterKeyBindingsByKeyBinding(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusNext',
      key: 'Ctrl + Space',
      isCtrl: true,
      isShift: false,
      keyMatches: [],
      commandMatches: [],
    },
  ])
})
