import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const setFocus = (focusKey: number): Promise<void> => {
  return RendererWorker.invoke('Focus.setFocus', focusKey)
}
