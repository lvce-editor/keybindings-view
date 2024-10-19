import * as ParseKey from '../ParseKey/ParseKey.ts'

export const parseKeyBinding = (keyBinding: any) => {
  return {
    ...keyBinding,
    rawKey: keyBinding.key,
    ...ParseKey.parseKey(keyBinding.key),
  }
}
