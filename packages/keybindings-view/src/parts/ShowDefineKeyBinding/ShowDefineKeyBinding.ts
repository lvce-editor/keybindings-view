import * as ParentRpc from '../ParentRpc/ParentRpc.ts'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.ts'

export const showDefineKeyBinding = async (): Promise<void> => {
  await ParentRpc.invoke('Viewlet.openWidget', ViewletModuleId.DefineKeyBinding)
}
