import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as HandleContextMenu from '../src/parts/HandleContextMenu/HandleContextMenu.ts'

test('handleContextMenu - shows context menu', async () => {
  let called = false
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ContextMenu.show') {
        called = true
        return undefined
      }
      return undefined
    },
  })
  RendererWorker.set(mockRpc)
  const r = await HandleContextMenu.handleContextMenu({} as any, 0, 10, 20)
  expect(called).toBe(true)
  expect(r).toBeDefined()
})
