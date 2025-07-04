import * as Rpc from '../RendererWorker/RendererWorker.ts'

export const show = async (x: number, y: number, id: number, ...args: readonly any[]): Promise<void> => {
  await Rpc.invoke('ContextMenu.show', x, y, id, ...args)
}
