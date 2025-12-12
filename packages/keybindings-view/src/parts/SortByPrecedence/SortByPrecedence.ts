import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as SortKeyBindings from '../SortKeyBindings/SortKeyBindings.ts'

export const sortByPrecedence = (state: KeyBindingsState): KeyBindingsState => {
  const { isSortingByPrecedence, items } = state
  const newValue = !isSortingByPrecedence
  const sorted = SortKeyBindings.sortKeyBindings(items, isSortingByPrecedence)
  return {
    ...state,
    deltaY: 0,
    isSortingByPrecedence: newValue,
    items: sorted,
    minLineY: 0,
  }
}
