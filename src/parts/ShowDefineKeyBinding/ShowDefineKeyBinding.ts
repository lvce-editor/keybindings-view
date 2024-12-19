import * as ParentRpc from '../ParentRpc/ParentRpc.ts'
import * as ViewletModuleId from '../ViewletModuleId/ViewletModuleId.ts'

export const showDefineKeyBinding = () => {
  return ParentRpc.invoke('Viewlet.openWidget', ViewletModuleId.DefineKeyBinding)
}
