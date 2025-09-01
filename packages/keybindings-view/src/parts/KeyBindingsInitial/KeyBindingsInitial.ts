import { RendererWorker } from '@lvce-editor/rpc-registry'

export const getKeyBindings = (): Promise<readonly any[]> => {
  // @ts-ignore
  return RendererWorker.invoke('KeyBindingsInitial.getKeyBindings')
}
