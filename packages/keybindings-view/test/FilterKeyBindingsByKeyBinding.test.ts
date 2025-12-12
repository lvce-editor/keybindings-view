import { expect, test } from '@jest/globals'
import * as FilterKeyBindingsByKeyBinding from '../src/parts/FilterKeyBindingsByKeyBinding/FilterKeyBindingsByKeyBinding.ts'

test('filterKeyBindingsByKeyBinding - exact quoted key match', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.focusNext',
      isCtrl: true,
      isShift: false,
      key: 'Ctrl + Space',
    },
    {
      command: 'EditorCompletion.focusPrevious',
      isCtrl: true,
      isShift: false,
      key: 'Ctrl + ArrowUp',
    },
  ]
  const value = '"Ctrl + Space"'
  expect(FilterKeyBindingsByKeyBinding.filterKeyBindingsByKeyBinding(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusNext',
      commandMatches: [],
      isCtrl: true,
      isShift: false,
      key: 'Ctrl + Space',
      keyMatches: [],
    },
  ])
})
