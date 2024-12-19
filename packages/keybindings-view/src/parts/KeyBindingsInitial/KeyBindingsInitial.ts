import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const getKeyBindings = (): Promise<readonly any[]> => {
  return ParentRpc.invoke('KeyBindingsInitial.getKeyBindings')
}
