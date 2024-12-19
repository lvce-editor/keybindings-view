import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const setFocus = (focusKey: number): Promise<void> => {
  return ParentRpc.invoke('Focus.setFocus', focusKey)
}
