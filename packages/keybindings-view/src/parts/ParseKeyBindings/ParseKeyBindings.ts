import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import * as ParseKeyBinding from '../ParseKeyBinding/ParseKeyBinding.ts'

export const parseKeyBindings = (keyBindings: readonly any[]): readonly ParsedKeyBinding[] => {
  return keyBindings.map(ParseKeyBinding.parseKeyBinding)
}
