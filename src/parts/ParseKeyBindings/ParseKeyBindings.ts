import * as ParseKeyBinding from '../ParseKeyBinding/ParseKeyBinding.ts'

export const parseKeyBindings = (keyBindings: any[]) => {
  return keyBindings.map(ParseKeyBinding.parseKeyBinding)
}
