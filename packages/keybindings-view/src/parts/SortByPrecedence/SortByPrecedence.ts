import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as SortKeyBindings from '../SortKeyBindings/SortKeyBindings.ts'

export const sortByPrecedence = (state: KeyBindingsState): KeyBindingsState => {
  const { isSortingByPrecedence, items } = state
  const newValue = !isSortingByPrecedence
  const sorted = SortKeyBindings.sortKeyBindings(items, isSortingByPrecedence)
  console.log({ items })
  return {
    ...state,
    isSortingByPrecedence: newValue,
    items: sorted,
  }
}
