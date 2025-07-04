import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as ParentRpc from '../src/parts/RendererWorker/RendererWorker.ts'

test('invoke - calls rpc invoke with correct arguments', async () => {
  let called = false
  let calledArgs: readonly any[] = []
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = true
      calledArgs = [method, ...args]
      return undefined
    },
  })
  RendererWorker.set(mockRpc)
  const method = 'Test.method'
  const arg1 = 'test'
  const arg2 = 123
  // @ts-ignore
  await ParentRpc.invoke(method, arg1, arg2)
  expect(called).toBe(true)
  expect(calledArgs).toEqual([method, arg1, arg2])
})

test('invoke - handles no arguments', async () => {
  let called = false
  let calledArgs: readonly any[] = []
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      called = true
      calledArgs = [method, ...args]
      return undefined
    },
  })
  RendererWorker.set(mockRpc)
  const method = 'Test.method'
  // @ts-ignore
  await ParentRpc.invoke(method)
  expect(called).toBe(true)
  expect(calledArgs).toEqual([method])
})
