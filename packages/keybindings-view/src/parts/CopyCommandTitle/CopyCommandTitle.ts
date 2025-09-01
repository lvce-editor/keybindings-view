import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const copyCommandTitle = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const { focusedIndex, items } = state
  const item = items[focusedIndex]
  if (!item) {
    return state
  }
  const { command } = item
  await RendererWorker.writeClipBoardText(command)
  return state
}
