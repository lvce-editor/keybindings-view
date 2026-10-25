import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleContextMenu from '../src/parts/HandleContextMenu/HandleContextMenu.ts'
import * as MenuEntryId from '../src/parts/MenuEntryId/MenuEntryId.ts'

test('handleContextMenu - shows context menu', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const state = createDefaultState()
  const result = await HandleContextMenu.handleContextMenu(state, 0, 10, 100)
  expect(mockRpc.invocations).toEqual([
    ['ContextMenu.show2', state.uid, MenuEntryId.KeyBindingsTable, 10, 100, { menuId: MenuEntryId.KeyBindingsTable }],
  ])
  expect(result).toBe(state)
})
