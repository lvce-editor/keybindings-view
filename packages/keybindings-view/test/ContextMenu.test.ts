import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ContextMenu from '../src/parts/ContextMenu/ContextMenu.ts'

test('show - invokes context menu with correct items', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const uid = 1
  const menuId = 26 as const
  const x = 100
  const y = 200
  const args = { menuId: 26 as const }
  await ContextMenu.show2(uid, menuId, x, y, args)
  expect(mockRpc.invocations).toEqual([['ContextMenu.show2', uid, menuId, x, y, args]])
})
