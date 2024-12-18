import * as Rpc from '../ParentRpc/ParentRpc.ts'

export const show = async (x: number, y: number, id: number, ...args: any[]): Promise<void> => {
  await Rpc.invoke('ContextMenu.show', x, y, id, ...args)
}
