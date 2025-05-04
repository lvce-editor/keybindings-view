import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const getKeyBindings = (): Promise<readonly any[]> => {
  // @ts-ignore
  return ParentRpc.invoke('KeyBindingsInitial.getKeyBindings')
}
