import { expect, jest, test, beforeEach } from '@jest/globals'

const mockParentRpc = {
  invoke: jest.fn(),
}

beforeEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('../src/parts/RendererWorker/RendererWorker.ts', () => mockParentRpc)

const Focus = await import('../src/parts/Focus/Focus.ts')

test('setFocus - invokes Focus.setFocus with focus key', async () => {
  const focusKey = 39
  await Focus.setFocus(focusKey)

  expect(mockParentRpc.invoke).toHaveBeenCalledWith('Focus.setFocus', focusKey)
})
