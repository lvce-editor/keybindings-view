import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const copyCommandId = async (state: KeyBindingsState): Promise<KeyBindingsState> => {
  const { focusedIndex, items } = state
  const item = items[focusedIndex]
  if (!item) {
    return state
  }
  const { command } = item
  await RendererWorker.writeClipBoardText(command)
  return state
}
