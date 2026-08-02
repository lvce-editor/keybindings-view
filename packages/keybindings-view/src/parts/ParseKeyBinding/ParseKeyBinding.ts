import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import * as GetCommandName from '../GetCommandName/GetCommandName.ts'
import * as ParseKey from '../ParseKey/ParseKey.ts'

export const parseKeyBinding = (keyBinding: any): ParsedKeyBinding => {
  return {
    ...keyBinding,
    command: GetCommandName.getCommandName(keyBinding),
    rawKey: keyBinding.key,
    source: keyBinding.source || 'System',
    ...ParseKey.parseKey(keyBinding.key),
  }
}
