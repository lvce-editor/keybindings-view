import { expect, jest, test, beforeEach } from '@jest/globals'
import * as RpcId from '../src/parts/RpcId/RpcId.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'
import * as ShowDefineKeyBinding from '../src/parts/ShowDefineKeyBinding/ShowDefineKeyBinding.ts'

const mockRpc = {
  invoke: jest.fn(),
} as any

beforeEach(() => {
  jest.resetAllMocks()
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
})

test('showDefineKeyBinding', async () => {
  await ShowDefineKeyBinding.showDefineKeyBinding()
  expect(mockRpc.invoke).toHaveBeenCalledWith('ShowDefineKeyBinding.showDefineKeyBinding')
})

test('showDefineKeyBinding - error handling', async () => {
  mockRpc.invoke.mockRejectedValue(new Error('Failed to show define key binding'))
  await expect(ShowDefineKeyBinding.showDefineKeyBinding()).rejects.toThrow('Failed to show define key binding')
  expect(mockRpc.invoke).toHaveBeenCalledWith('ShowDefineKeyBinding.showDefineKeyBinding')
})
