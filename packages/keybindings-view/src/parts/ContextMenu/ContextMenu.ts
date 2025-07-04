import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const show = async (x: number, y: number, id: number, ...args: readonly any[]): Promise<void> => {
  await RendererWorker.showContextMenu(x, y, id, ...args)
}
