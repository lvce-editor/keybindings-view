import * as RendererWorker from '../RendererWorker/RendererWorker.ts'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.ts'

export const showDefineKeyBinding = async (): Promise<void> => {
  await RendererWorker.invoke('Viewlet.openWidget', ViewletModuleId.DefineKeyBinding)
}
