import { beforeEach, expect, jest, test } from '@jest/globals'
import * as ParentRpc from '../src/parts/RendererWorker/RendererWorker.ts'

const mockRpc = {
  invoke: jest.fn(),
} as any

beforeEach(() => {
  jest.resetAllMocks()
  ParentRpc.set(mockRpc)
})

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
