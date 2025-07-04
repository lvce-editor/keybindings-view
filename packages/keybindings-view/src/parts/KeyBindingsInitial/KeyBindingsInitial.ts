import * as ParentRpc from '../RendererWorker/RendererWorker.ts'

export const getKeyBindings = (): Promise<readonly any[]> => {
  // @ts-ignore
  return ParentRpc.invoke('KeyBindingsInitial.getKeyBindings')
}
