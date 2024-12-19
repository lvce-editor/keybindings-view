import { expect, jest, test, beforeEach } from '@jest/globals'

const mockParentRpc = {
  invoke: jest.fn(),
}

beforeEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('../src/parts/ParentRpc/ParentRpc.ts', () => mockParentRpc)

const ContextMenu = await import('../src/parts/ContextMenu/ContextMenu.ts')

test('show - invokes context menu with correct items', async () => {
  const x = 100
  const y = 200
  const items = [
    {
      id: 'copy',
      label: 'Copy',
    },
    {
      id: 'paste',
      label: 'Paste',
    },
  ]

  await ContextMenu.show({ x, y, items })

  expect(mockParentRpc.invoke).toHaveBeenCalledWith('ContextMenu.show', {
    x,
    y,
    items,
  })
})
