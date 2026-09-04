import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import { keyBindingsStorageUri } from '../KeyBindingsStorageUri/KeyBindingsStorageUri.ts'
import { parseKeyBindings } from '../ParseKeyBindings/ParseKeyBindings.ts'

const loadPersistedKeyBindings = async (): Promise<readonly unknown[] | undefined> => {
  try {
    const content = await RendererWorker.invoke('FileSystem.readFile', keyBindingsStorageUri)
    if (typeof content !== 'string') {
      return undefined
    }
    const parsed = JSON.parse(content)
    return Array.isArray(parsed) ? parsed : undefined
  } catch {
    return undefined
  }
}

export const loadKeyBindings = async (): Promise<readonly ParsedKeyBinding[]> => {
  const defaultKeyBindings = await loadDefaultKeyBindings()
  const persistedKeyBindings = await loadPersistedKeyBindings()
  return persistedKeyBindings ? parseKeyBindings(persistedKeyBindings) : defaultKeyBindings
}

export const loadDefaultKeyBindings = async (): Promise<readonly ParsedKeyBinding[]> => {
  // @ts-ignore
  const defaultKeyBindings = await RendererWorker.invoke('KeyBindingsInitial.getKeyBindings')
  return parseKeyBindings(defaultKeyBindings)
}
