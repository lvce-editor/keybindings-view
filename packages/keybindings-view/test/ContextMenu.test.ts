import { expect, test } from '@jest/globals'
import * as ContextMenu from '../src/parts/ContextMenu/ContextMenu.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

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
