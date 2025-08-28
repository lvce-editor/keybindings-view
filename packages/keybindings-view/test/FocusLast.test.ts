import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusLast from '../src/parts/FocusLast/FocusLast.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('focusLast - focuses the last item', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
    height: 100,
    headerHeight: 0,
    itemHeight: 10,
    minLineY: 0,
    maxLineY: 0,
  }
  const updated = FocusLast.focusLast(state)
  expect(updated.focusedIndex).toBe(3)
  expect(updated.selectedIndex).toBe(3)
})
