import { createLazyRpc } from '@lvce-editor/rpc-registry'

export const { invoke, setFactory } = createLazyRpc(9222)
