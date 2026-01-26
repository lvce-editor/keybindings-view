import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as HandleContextMenu from '../src/parts/HandleContextMenu/HandleContextMenu.ts'

test.skip('handleContextMenu - shows context menu', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show'() {},
  })
  const result = await HandleContextMenu.handleContextMenu({} as any, 0, 10, 20)
  expect(mockRpc.invocations).toEqual([['ContextMenu.show', 10, 20, 26]])
  expect(result).toBeDefined()
})
