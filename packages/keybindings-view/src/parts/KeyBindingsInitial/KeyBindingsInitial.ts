import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const getKeyBindings = (): Promise<readonly any[]> => {
  // @ts-ignore
  return RendererWorker.invoke('KeyBindingsInitial.getKeyBindings')
}
