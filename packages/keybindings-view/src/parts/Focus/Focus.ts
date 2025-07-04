import * as ParentRpc from '../RendererWorker/RendererWorker.ts'

export const setFocus = (focusKey: number): Promise<void> => {
  return ParentRpc.invoke('Focus.setFocus', focusKey)
}
