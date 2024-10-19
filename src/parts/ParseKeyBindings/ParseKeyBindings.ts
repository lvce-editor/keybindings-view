import * as ParseKeyBinding from '../ParseKeyBinding/ParseKeyBinding.ts'

export const parseKeyBindings = (keyBindings) => {
  return keyBindings.map(ParseKeyBinding.parseKeyBinding)
}
