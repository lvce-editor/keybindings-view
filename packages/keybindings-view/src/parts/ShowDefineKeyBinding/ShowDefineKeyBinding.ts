import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.ts'

export const showDefineKeyBinding = async (): Promise<void> => {
  await RendererWorker.openWidget(ViewletModuleId.DefineKeyBinding)
}
