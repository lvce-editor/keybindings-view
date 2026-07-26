import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import * as DefineKeyBindingMode from '../DefineKeyBindingMode/DefineKeyBindingMode.ts'
import * as ParseKey from '../ParseKey/ParseKey.ts'
import * as ParseKeyBindingString from '../ParseKeyBindingString/ParseKeyBindingString.ts'
import * as UpdateKeyBindings from '../UpdateKeyBindings/UpdateKeyBindings.ts'

const isSameKeyBinding = (a: ParsedKeyBinding, b: ParsedKeyBinding): boolean => {
  return a.command === b.command && a.rawKey === b.rawKey && a.when === b.when && a.source === b.source
}

export const handleDefineKeyBindingDisposed = (state: KeyBindingsState, value: string): KeyBindingsState => {
  const { defineKeyBindingsId, items, parsedKeyBindings, selectedIndex } = state
  const selectedItem = items[selectedIndex]
  const resetState = {
    ...state,
    defineKeyBindingsId: DefineKeyBindingMode.None,
  }
  if (!selectedItem || !value) {
    return resetState
  }
  const rawKey = ParseKeyBindingString.parseKeyBindingString(value)
  if (rawKey === KeyCode.Unknown) {
    return resetState
  }
  const updatedItem: ParsedKeyBinding = {
    ...selectedItem,
    ...ParseKey.parseKey(rawKey),
    commandMatches: [],
    keyMatches: [],
    rawKey,
    source: 'User',
  }
  if (defineKeyBindingsId === DefineKeyBindingMode.Add) {
    return UpdateKeyBindings.updateKeyBindings(resetState, [...parsedKeyBindings, updatedItem], updatedItem)
  }
  if (defineKeyBindingsId === DefineKeyBindingMode.Change) {
    const index = parsedKeyBindings.findIndex((item) => isSameKeyBinding(item, selectedItem))
    if (index === -1) {
      return resetState
    }
    const updatedKeyBindings = parsedKeyBindings.with(index, updatedItem)
    return UpdateKeyBindings.updateKeyBindings(resetState, updatedKeyBindings, updatedItem)
  }
  return resetState
}
