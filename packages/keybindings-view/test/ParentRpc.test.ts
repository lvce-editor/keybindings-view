import { expect, jest, test, beforeEach } from '@jest/globals'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'
import * as RpcId from '../src/parts/RpcId/RpcId.ts'

const mockRpc = {
  invoke: jest.fn(),
} as any

beforeEach(() => {
  jest.resetAllMocks()
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)
})

const ParentRpc = await import('../src/parts/ParentRpc/ParentRpc.ts')

test('invoke - calls rpc invoke with correct arguments', async () => {
  const method = 'Test.method'
  const arg1 = 'test'
  const arg2 = 123
  // @ts-ignore
  await ParentRpc.invoke(method, arg1, arg2)
  expect(mockRpc.invoke).toHaveBeenCalledWith(method, arg1, arg2)
})

test('invoke - handles no arguments', async () => {
  const method = 'Test.method'
  // @ts-ignore
  await ParentRpc.invoke(method)
  expect(mockRpc.invoke).toHaveBeenCalledWith(method)
})
