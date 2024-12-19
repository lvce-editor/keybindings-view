import * as ParentRpc from '../ParentRpc/ParentRpc.ts'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.ts'

export const showDefineKeyBinding = (): Promise<void> => {
  return ParentRpc.invoke('Viewlet.openWidget', ViewletModuleId.DefineKeyBinding)
}
