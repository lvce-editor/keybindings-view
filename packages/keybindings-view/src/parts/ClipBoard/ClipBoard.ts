import * as ParentRpc from '../RendererWorker/RendererWorker.ts'

export const writeText = async (text: string): Promise<void> => {
  await ParentRpc.invoke('ClipBoard.writeText', text)
}
