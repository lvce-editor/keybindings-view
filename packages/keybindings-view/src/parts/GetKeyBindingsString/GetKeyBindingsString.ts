import * as GetKeyModifierPrefix from '../GetKeyModifierPrefix/GetKeyModifierPrefix.ts'

export const getKeyBindingString = (key: string, altKey: boolean, ctrlKey: boolean, shiftKey: boolean, metaKey: boolean): string => {
  const prefix = GetKeyModifierPrefix.getKeyModifierPrefix(altKey, ctrlKey, shiftKey, metaKey)
  return prefix + key.toUpperCase()
}
