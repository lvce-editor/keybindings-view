import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusLast from '../src/parts/FocusLast/FocusLast.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('focusLast - focuses the last item', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    headerHeight: 0,
    height: 100,
    itemHeight: 10,
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
    maxLineY: 0,
    minLineY: 0,
  }
  const updated = FocusLast.focusLast(state)
  expect(updated.focusedIndex).toBe(3)
  expect(updated.selectedIndex).toBe(3)
})
