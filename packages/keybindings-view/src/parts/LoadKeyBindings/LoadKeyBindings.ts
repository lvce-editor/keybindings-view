import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import { parseKeyBindings } from '../ParseKeyBindings/ParseKeyBindings.ts'
import { RendererWorker } from '@lvce-editor/rpc-registry'

export const loadKeyBindings = async (): Promise<readonly ParsedKeyBinding[]> => {
  // @ts-ignore
  const rawKeyBindings = await RendererWorker.invoke('KeyBindingsInitial.getKeyBindings')
  const keyBindings = parseKeyBindings(rawKeyBindings)
  return keyBindings
}
