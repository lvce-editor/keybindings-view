import * as GetKeyModifierPrefix from '../GetKeyModifierPrefix/GetKeyModifierPrefix.ts'

export const getKeyBindingString = (key: string, altKey: boolean, ctrlKey: boolean, shiftKey: boolean, metaKey: boolean): string => {
  const prefix = GetKeyModifierPrefix.getKeyModifierPrefix(altKey, ctrlKey, shiftKey, metaKey)
  const normalizedKey = key.length === 1 ? key.toUpperCase() : key
  return prefix + normalizedKey
}
