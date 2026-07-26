import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import * as UpdateKeyBindings from '../UpdateKeyBindings/UpdateKeyBindings.ts'

export const removeKeyBinding = (state: KeyBindingsState): KeyBindingsState => {
  const { items, parsedKeyBindings, selectedIndex } = state
  const selectedItem = items[selectedIndex]
  if (!selectedItem) {
    return state
  }
  const isSelectedItem = (item: ParsedKeyBinding): boolean => {
    return (
      item.command === selectedItem.command &&
      item.rawKey === selectedItem.rawKey &&
      item.when === selectedItem.when &&
      item.source === selectedItem.source
    )
  }
  const index = parsedKeyBindings.findIndex(isSelectedItem)
  if (index === -1) {
    return state
  }
  const updatedKeyBindings = parsedKeyBindings.toSpliced(index, 1)
  return UpdateKeyBindings.updateKeyBindings(state, updatedKeyBindings)
}
