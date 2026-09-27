import { RendererWorker } from '@lvce-editor/rpc-registry'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import { keyBindingsStorageUri } from '../KeyBindingsStorageUri/KeyBindingsStorageUri.ts'
import { parseKeyBindingString } from '../ParseKeyBindingString/ParseKeyBindingString.ts'
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
  if (!persistedKeyBindings) {
    return defaultKeyBindings
  }
  const normalizedKeyBindings = persistedKeyBindings
    .map((keyBinding: any) => {
      if (typeof keyBinding?.key !== 'string') {
        return keyBinding
      }
      const key = parseKeyBindingString(keyBinding.key)
      if (key === KeyCode.Unknown) {
        return undefined
      }
      return { ...keyBinding, key }
    })
    .filter(Boolean)
  return parseKeyBindings(normalizedKeyBindings)
}

export const loadDefaultKeyBindings = async (): Promise<readonly ParsedKeyBinding[]> => {
  // @ts-ignore
  const defaultKeyBindings = await RendererWorker.invoke('KeyBindingsInitial.getKeyBindings')
  return parseKeyBindings(defaultKeyBindings)
}
