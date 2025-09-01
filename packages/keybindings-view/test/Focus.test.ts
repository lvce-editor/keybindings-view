import { expect, test } from '@jest/globals'
import * as Focus from '../src/parts/Focus/Focus.ts'
import { RendererWorker } from '@lvce-editor/rpc-registry'

test('setFocus - invokes Focus.setFocus with focus key', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'Focus.setFocus'() {},
  })
  const focusKey = 39
  await Focus.setFocus(focusKey)
  expect(mockRpc.invocations).toEqual([['Focus.setFocus', focusKey]])
})
