import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as FocusKey from '../FocusKey/FocusKey.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import * as SortKeyBindings from '../SortKeyBindings/SortKeyBindings.ts'

export const handleInput = (state: KeyBindingsState, value: string): KeyBindingsState => {
  const { isSortingByPrecedence, maxVisibleItems, parsedKeyBindings } = state
  const items = FilterKeyBindings.getFilteredKeyBindings(parsedKeyBindings, value)
  const sorted = SortKeyBindings.sortKeyBindings(items, isSortingByPrecedence)
  const maxLineY = Math.min(sorted.length, maxVisibleItems)
  return {
    ...state,
    focus: FocusKey.Input,
    inputSource: InputSource.User,
    items: sorted,
    maxLineY,
    value,
  }
}
