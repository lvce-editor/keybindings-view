import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import * as ParseKey from '../ParseKey/ParseKey.ts'

export const parseKeyBinding = (keyBinding: any): ParsedKeyBinding => {
  return {
    ...keyBinding,
    rawKey: keyBinding.key,
    ...ParseKey.parseKey(keyBinding.key),
  }
}
