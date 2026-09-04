import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.ts'

export const showDefineKeyBinding = async (parentUid: number): Promise<void> => {
  await RendererWorker.invoke('Viewlet.openWidget', ViewletModuleId.DefineKeyBinding, parentUid)
}
