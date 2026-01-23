import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ContextMenu from '../src/parts/ContextMenu/ContextMenu.ts'

test.skip('show - invokes context menu with correct items', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show'() {},
  })
  const x = 100
  const y = 200
  const id = 1
  // @ts-ignore
  await ContextMenu.show(x, y, id)
  expect(mockRpc.invocations).toEqual([['ContextMenu.show', x, y, id]])
})
