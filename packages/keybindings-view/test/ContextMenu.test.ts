import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ContextMenu from '../src/parts/ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../src/parts/MenuEntryId/MenuEntryId.ts'

test('show2 - invokes context menu with correct items', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const uid = 1
  const x = 100
  const y = 200
  await ContextMenu.show2(uid, MenuEntryId.KeyBindingsTable, x, y, { menuId: MenuEntryId.KeyBindingsTable })
  expect(mockRpc.invocations).toEqual([['ContextMenu.show2', uid, MenuEntryId.KeyBindingsTable, x, y, { menuId: MenuEntryId.KeyBindingsTable }]])
})
