import * as RendererWorker from '../RendererWorker/RendererWorker.ts'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.ts'

export const showDefineKeyBinding = async (): Promise<void> => {
  await RendererWorker.openWidget(ViewletModuleId.DefineKeyBinding)
}
