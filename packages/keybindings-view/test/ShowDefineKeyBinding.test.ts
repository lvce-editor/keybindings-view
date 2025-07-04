import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ShowDefineKeyBinding from '../src/parts/ShowDefineKeyBinding/ShowDefineKeyBinding.ts'

test('showDefineKeyBinding', async () => {
  let called = false
  let calledArgs: any[] = []
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: any[]) => {
      if (method === 'Viewlet.openWidget') {
        called = true
        calledArgs = args
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  await ShowDefineKeyBinding.showDefineKeyBinding()
  expect(called).toBe(true)
  expect(calledArgs).toEqual(['DefineKeyBinding'])
})

test('showDefineKeyBinding - error handling', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      throw new Error('Failed to show define key binding')
    },
  })
  RendererWorker.set(mockRpc)
  await expect(ShowDefineKeyBinding.showDefineKeyBinding()).rejects.toThrow('Failed to show define key binding')
})
