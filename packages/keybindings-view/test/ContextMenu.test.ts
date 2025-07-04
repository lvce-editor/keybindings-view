import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
const ContextMenu = await import('../src/parts/ContextMenu/ContextMenu.ts')

test('show - invokes context menu with correct items', async () => {
  let called = false
  let calledArgs: readonly any[] = []
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ContextMenu.show') {
        called = true
        calledArgs = args
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  const x = 100
  const y = 200
  const id = 1
  await ContextMenu.show(x, y, id)
  expect(called).toBe(true)
  expect(calledArgs).toEqual([x, y, id])
})
