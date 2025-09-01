import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ContextMenu from '../src/parts/ContextMenu/ContextMenu.ts'

test('show - invokes context menu with correct items', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show'() {},
  })
  const x = 100
  const y = 200
  const id = 1
  await ContextMenu.show(x, y, id)
  expect(mockRpc.invocations).toEqual([['ContextMenu.show', x, y, id]])
})
