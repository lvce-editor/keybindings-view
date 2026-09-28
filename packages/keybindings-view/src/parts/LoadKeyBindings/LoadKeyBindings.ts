import { RendererWorker } from '@lvce-editor/rpc-registry'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import { keyBindingsStorageUri } from '../KeyBindingsStorageUri/KeyBindingsStorageUri.ts'
import { parseKeyBindings } from '../ParseKeyBindings/ParseKeyBindings.ts'
import { parseKeyBindingString } from '../ParseKeyBindingString/ParseKeyBindingString.ts'

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

const isSnapshotMarker = (keyBinding: any): boolean => keyBinding?.$type === 'keybindings-snapshot'

const isValidKeyBinding = (keyBinding: any): boolean => {
  return (
    keyBinding &&
    typeof keyBinding === 'object' &&
    typeof keyBinding.command === 'string' &&
    keyBinding.command.length > 0 &&
    (typeof keyBinding.key === 'number' || typeof keyBinding.key === 'string')
  )
}

const sameKeyBinding = (a: ParsedKeyBinding, b: ParsedKeyBinding): boolean => {
  return a.command === b.command && a.rawKey === b.rawKey && a.when === b.when
}

export const loadKeyBindings = async (): Promise<readonly ParsedKeyBinding[]> => {
  const defaultKeyBindings = await loadDefaultKeyBindings()
  const persistedKeyBindings = await loadPersistedKeyBindings()
  if (!persistedKeyBindings) {
    return defaultKeyBindings
  }
  const hasSnapshotMarker = persistedKeyBindings.some(isSnapshotMarker)
  const hasLegacySnapshot = persistedKeyBindings.some((keyBinding: any) => keyBinding?.source === 'System')
  const persistedSource = (keyBinding: any): string => keyBinding.source || (hasSnapshotMarker || hasLegacySnapshot ? 'System' : 'User')
  const normalizedKeyBindings = persistedKeyBindings
    .filter((keyBinding: any) => !isSnapshotMarker(keyBinding) && isValidKeyBinding(keyBinding))
    .map((keyBinding: any) => {
      if (typeof keyBinding?.key !== 'string') {
        return { ...keyBinding, source: persistedSource(keyBinding) }
      }
      const key = parseKeyBindingString(keyBinding.key)
      if (key === KeyCode.Unknown) {
        return undefined
      }
      return { ...keyBinding, key, source: persistedSource(keyBinding) }
    })
    .filter(Boolean)
  const parsedPersistedKeyBindings = parseKeyBindings(normalizedKeyBindings)
  if (hasSnapshotMarker || hasLegacySnapshot) {
    return parsedPersistedKeyBindings
  }
  const mergedKeyBindings = [...defaultKeyBindings]
  for (const userKeyBinding of parsedPersistedKeyBindings) {
    if (mergedKeyBindings.every((defaultKeyBinding) => !sameKeyBinding(defaultKeyBinding, userKeyBinding))) {
      mergedKeyBindings.push(userKeyBinding)
    }
  }
  return mergedKeyBindings
}

export const loadDefaultKeyBindings = async (): Promise<readonly ParsedKeyBinding[]> => {
  // @ts-ignore
  const defaultKeyBindings = await RendererWorker.invoke('KeyBindingsInitial.getKeyBindings')
  return parseKeyBindings(defaultKeyBindings)
}
