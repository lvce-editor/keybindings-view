import { test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
const Focus = await import('../src/parts/Focus/Focus.ts')

test('setFocus - invokes Focus.setFocus with focus key', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Focus.setFocus') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  const focusKey = 39
  await Focus.setFocus(focusKey)
  // No error means the correct method was called
})
