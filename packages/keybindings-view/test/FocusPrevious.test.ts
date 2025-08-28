import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusPrevious from '../src/parts/FocusPrevious/FocusPrevious.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('focusPrevious - moves selection to previous item but not below 0', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
    height: 100,
    headerHeight: 0,
    itemHeight: 10,
    selectedIndex: 1,
    minLineY: 0,
    maxLineY: 2,
  }
  const updated = FocusPrevious.focusPrevious(state)
  expect(updated.selectedIndex).toBe(0)
  expect(updated.focusedIndex).toBe(0)

  const updated2 = FocusPrevious.focusPrevious({ ...updated, selectedIndex: 0 })
  expect(updated2.selectedIndex).toBe(0)
  expect(updated2.focusedIndex).toBe(0)
})
