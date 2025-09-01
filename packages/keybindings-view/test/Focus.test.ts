import { test } from '@jest/globals'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import * as Focus from '../src/parts/Focus/Focus.ts'

test('setFocus - invokes Focus.setFocus with focus key', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'Focus.setFocus'() {},
  })
  const focusKey = 39
  await Focus.setFocus(focusKey)
  expect(mockRpc.invocations).toEqual([
    ['Focus.setFocus', focusKey],
  ])
})
