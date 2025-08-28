import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import { parseKeyBindings } from '../ParseKeyBindings/ParseKeyBindings.ts'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const loadKeyBindings = async (): Promise<readonly ParsedKeyBinding[]> => {
  // @ts-ignore
  const rawKeyBindings = await RendererWorker.invoke('KeyBindingsInitial.getKeyBindings')
  const keyBindings = parseKeyBindings(rawKeyBindings)
  return keyBindings
}
