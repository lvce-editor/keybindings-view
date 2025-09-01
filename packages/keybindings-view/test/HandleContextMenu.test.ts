import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as HandleContextMenu from '../src/parts/HandleContextMenu/HandleContextMenu.ts'

test('handleContextMenu - shows context menu', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show'() {},
  })
  const result = await HandleContextMenu.handleContextMenu({} as any, 0, 10, 20)
  expect(mockRpc.invocations).toEqual([['ContextMenu.show', 10, 20, 26]])
  expect(result).toBeDefined()
})
