import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusNext from '../src/parts/FocusNext/FocusNext.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('focusNext - moves selection to next item but not beyond last', () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
    height: 100,
    headerHeight: 0,
    itemHeight: 10,
    selectedIndex: 0,
    minLineY: 0,
    maxLineY: 2,
  }
  const updated = FocusNext.focusNext(state)
  expect(updated.selectedIndex).toBe(1)
  expect(updated.focusedIndex).toBe(1)

  const updated2 = FocusNext.focusNext({ ...updated, selectedIndex: 2 })
  expect(updated2.selectedIndex).toBe(2)
  expect(updated2.focusedIndex).toBe(2)
})
