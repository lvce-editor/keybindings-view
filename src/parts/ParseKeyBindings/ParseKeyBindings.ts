import * as ParseKeyBinding from '../ParseKeyBinding/ParseKeyBinding.ts'

export const parseKeyBindings = (keyBindings: readonly any[]): readonly any[] => {
  return keyBindings.map(ParseKeyBinding.parseKeyBinding)
}
