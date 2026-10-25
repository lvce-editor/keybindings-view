import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const copyCommandTitle = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const { focusedIndex, items } = state
  const item = items[focusedIndex]
  if (!item) {
    return state
  }
  const { command } = item
  const entries: readonly { readonly id: string; readonly label: string }[] = await RendererWorker.invoke('Layout.getAllQuickPickMenuEntries')
  const entry = entries.find((entry) => entry.id === command)
  const title = entry?.label || command
  await RendererWorker.writeClipBoardText(title)
  return state
}
