import { RendererWorker } from '@lvce-editor/rpc-registry'

export const { invoke, set, writeClipBoardText, setFocus, showContextMenu, openWidget } = RendererWorker

export const registerMockRpc = (mockRpc: unknown): any => {
  // forward to underlying implementation while avoiding exporting private types
   
  return (RendererWorker as any).registerMockRpc(mockRpc)
}
