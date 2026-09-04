import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as GetVisibleKeyBindings from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import * as SortKeyBindings from '../SortKeyBindings/SortKeyBindings.ts'

export const updateKeyBindings = (
  state: KeyBindingsState,
  parsedKeyBindings: readonly ParsedKeyBinding[],
  selectedItem?: ParsedKeyBinding,
): KeyBindingsState => {
  const { isSortingByPrecedence, maxVisibleItems, minLineY: currentMinLineY, selectedIndex: currentSelectedIndex, value } = state
  const filtered = FilterKeyBindings.getFilteredKeyBindings(parsedKeyBindings, value)
  const items = SortKeyBindings.sortKeyBindings(filtered, isSortingByPrecedence)
  const selectedIndex = selectedItem
    ? items.findIndex(
        (item) =>
          item.command === selectedItem.command &&
          item.rawKey === selectedItem.rawKey &&
          item.when === selectedItem.when &&
          item.source === selectedItem.source,
      )
    : Math.min(currentSelectedIndex, items.length - 1)
  const minLineY = Math.min(currentMinLineY, Math.max(items.length - maxVisibleItems, 0))
  const maxLineY = Math.min(items.length, minLineY + maxVisibleItems)
  const visibleItems = GetVisibleKeyBindings.getVisibleKeyBindings(items, minLineY, maxLineY, selectedIndex, false)
  return {
    ...state,
    editingWhenExpression: false,
    focusedIndex: selectedIndex,
    items,
    maxLineY,
    minLineY,
    parsedKeyBindings,
    selectedIndex,
    visibleItems,
  }
}
