import { expect, test } from '@jest/globals'
import * as FilterKeyBindingsDefault from '../src/parts/FilterKeyBindingsDefault/FilterKeyBindingsDefault.ts'

test('filterKeyBindingsDefault - fuzzy command match', () => {
  const keyBindings = [
    { command: 'EditorCompletion.focusNext', key: 'ArrowDown' },
    { command: 'EditorCompletion.focusPrevious', key: 'ArrowUp' },
  ]
  const value = 'fpr'
  expect(FilterKeyBindingsDefault.filterKeyBindingsDefault(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusPrevious',
      commandMatches: [26, 17, 18, 22, 24],
      key: 'ArrowUp',
      keyMatches: [],
    },
  ])
})
