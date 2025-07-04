import { beforeEach, expect, jest, test } from '@jest/globals'

const mockParentRpc = {
  invoke: jest.fn(),
}

beforeEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('../src/parts/RendererWorker/RendererWorker.ts', () => mockParentRpc)

const ContextMenu = await import('../src/parts/ContextMenu/ContextMenu.ts')

test('show - invokes context menu with correct items', async () => {
  const x = 100
  const y = 200
  const id = 1
  await ContextMenu.show(x, y, id)
  expect(mockParentRpc.invoke).toHaveBeenCalledWith('ContextMenu.show', x, y, id)
})
