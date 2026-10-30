import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'
import * as SortKeyBindings from '../SortKeyBindings/SortKeyBindings.ts'

export const updateKeyBindings = (
  state: KeyBindingsState,
  parsedKeyBindings: readonly ParsedKeyBinding[],
  selectedItem?: ParsedKeyBinding,
): KeyBindingsState => {
  const { deltaY, isSortingByPrecedence, selectedIndex: currentSelectedIndex, value } = state
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
  const updatedState = {
    ...state,
    editingWhenExpression: false,
    focusedIndex: selectedIndex,
    items,
    parsedKeyBindings,
    selectedIndex,
  }
  return SetDeltaY.setDeltaY(updatedState, deltaY)
}
