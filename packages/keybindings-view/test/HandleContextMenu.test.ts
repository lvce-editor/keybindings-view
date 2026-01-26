import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as HandleContextMenu from '../src/parts/HandleContextMenu/HandleContextMenu.ts'

test('handleContextMenu - shows context menu', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleContextMenu.handleContextMenu(
    {
      uid: 1,
      y: 0,
      searchHeaderHeight: 0,
      tableHeaderHeight: 0,
    } as any,
    0,
    10,
    20,
  )
  expect(mockRpc.invocations).toEqual([['ContextMenu.show2', 1, 26, 10, 20, { menuId: 26 as const }]])
  expect(result).toBeDefined()
})
