import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import { keyBindingsStorageUri } from '../KeyBindingsStorageUri/KeyBindingsStorageUri.ts'

const toRawKeyBinding = (keyBinding: ParsedKeyBinding): object => {
  const rawKeyBinding: Record<string, unknown> = {
    ...keyBinding,
    key: keyBinding.rawKey,
  }
  delete rawKeyBinding.commandMatches
  delete rawKeyBinding.isAlt
  delete rawKeyBinding.isCtrl
  delete rawKeyBinding.isShift
  delete rawKeyBinding.keyMatches
  delete rawKeyBinding.rawKey
  return rawKeyBinding
}

export const persistKeyBindings = async (keyBindings: readonly ParsedKeyBinding[]): Promise<void> => {
  const rawKeyBindings = keyBindings.map(toRawKeyBinding)
  const content = JSON.stringify(rawKeyBindings, null, 2)
  await RendererWorker.invoke('FileSystem.writeFile', keyBindingsStorageUri, content)
}
