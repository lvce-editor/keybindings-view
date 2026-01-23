import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ShowDefineKeyBinding from '../src/parts/ShowDefineKeyBinding/ShowDefineKeyBinding.ts'

test('showDefineKeyBinding', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'Viewlet.openWidget'() {},
  })
  await ShowDefineKeyBinding.showDefineKeyBinding()
  expect(mockRpc.invocations).toEqual([['Viewlet.openWidget', 'DefineKeyBinding']])
})

test('showDefineKeyBinding - error handling', async () => {
  RendererWorker.registerMockRpc({
    'Viewlet.openWidget'() {
      throw new Error('Failed to show define key binding')
    },
  })
  await expect(ShowDefineKeyBinding.showDefineKeyBinding()).rejects.toThrow('Failed to show define key binding')
})
