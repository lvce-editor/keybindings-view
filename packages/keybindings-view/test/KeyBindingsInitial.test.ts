import { expect, jest, test, beforeEach } from '@jest/globals'
import * as RpcId from '../src/parts/RpcId/RpcId.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'
import * as KeyBindingsInitial from '../src/parts/KeyBindingsInitial/KeyBindingsInitial.ts'

const mockRpc = {
  invoke: jest.fn(),
} as any

beforeEach(() => {
  jest.resetAllMocks()
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
})

test('getKeyBindings', async () => {
  const mockKeyBindings = [
    {
      command: 'test.command',
      key: 'A',
      when: 'editorFocus',
    },
  ]
  mockRpc.invoke.mockResolvedValue(mockKeyBindings)

  const result = await KeyBindingsInitial.getKeyBindings()
  expect(result).toEqual(mockKeyBindings)
  expect(mockRpc.invoke).toHaveBeenCalledWith('KeyBindingsInitial.getKeyBindings')
})

test('getKeyBindings - error handling', async () => {
  mockRpc.invoke.mockRejectedValue(new Error('Failed to get key bindings'))

  await expect(KeyBindingsInitial.getKeyBindings()).rejects.toThrow('Failed to get key bindings')
  expect(mockRpc.invoke).toHaveBeenCalledWith('KeyBindingsInitial.getKeyBindings')
})
