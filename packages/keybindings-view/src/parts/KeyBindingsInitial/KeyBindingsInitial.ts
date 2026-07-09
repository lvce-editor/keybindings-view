import { RendererWorker } from '@lvce-editor/rpc-registry'

export const getKeyBindings = (): Promise<readonly any[]> => {
  return RendererWorker.invoke('KeyBindingsInitial.getKeyBindings')
}
