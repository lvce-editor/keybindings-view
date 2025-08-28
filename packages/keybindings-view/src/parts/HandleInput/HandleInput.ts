import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as FocusKey from '../FocusKey/FocusKey.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import * as SortKeyBindings from '../SortKeyBindings/SortKeyBindings.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'

export const handleInput = (state: KeyBindingsState, value: string): KeyBindingsState => {
  const { parsedKeyBindings, maxVisibleItems, isSortingByPrecedence, minLineY, selectedIndex } = state
  const items = FilterKeyBindings.getFilteredKeyBindings(parsedKeyBindings, value)
  const sorted = SortKeyBindings.sortKeyBindings(items, isSortingByPrecedence)
  const maxLineY = Math.min(sorted.length, maxVisibleItems)
  const visibleItems = getVisibleKeyBindings(sorted, minLineY, maxLineY, selectedIndex, false)
  return {
    ...state,
    focus: FocusKey.Input,
    inputSource: InputSource.User,
    items: sorted,
    maxLineY,
    value,
    visibleItems,
  }
}
