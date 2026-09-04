import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import * as LoadKeyBindings from '../LoadKeyBindings/LoadKeyBindings.ts'
import * as PersistKeyBindings from '../PersistKeyBindings/PersistKeyBindings.ts'
import * as UpdateKeyBindings from '../UpdateKeyBindings/UpdateKeyBindings.ts'

const isSameKeyBinding = (a: ParsedKeyBinding, b: ParsedKeyBinding): boolean => {
  return a.command === b.command && a.rawKey === b.rawKey && a.when === b.when && a.source === b.source
}

export const resetKeyBinding = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const { items, parsedKeyBindings, selectedIndex } = state
  const selectedItem = items[selectedIndex]
  if (!selectedItem || selectedItem.source !== 'User') {
    return state
  }
  const defaultKeyBindings = await LoadKeyBindings.loadDefaultKeyBindings()
  const matchingDefaults = defaultKeyBindings.filter((item) => item.command === selectedItem.command && item.when === selectedItem.when)
  const selectedParsedIndex = parsedKeyBindings.findIndex((item) => isSameKeyBinding(item, selectedItem))
  if (selectedParsedIndex === -1) {
    return state
  }
  const updatedKeyBindings = parsedKeyBindings.toSpliced(selectedParsedIndex, 1)
  const missingDefaults = matchingDefaults.filter((defaultKeyBinding) =>
    updatedKeyBindings.every((item) => !isSameKeyBinding(item, defaultKeyBinding)),
  )
  updatedKeyBindings.splice(selectedParsedIndex, 0, ...missingDefaults)
  await PersistKeyBindings.persistKeyBindings(updatedKeyBindings)
  return UpdateKeyBindings.updateKeyBindings(state, updatedKeyBindings, matchingDefaults[0])
}
