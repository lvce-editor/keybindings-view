import { beforeEach, expect, jest, test } from '@jest/globals'
import * as ParentRpc from '../src/parts/RendererWorker/RendererWorker.ts'
import * as ShowDefineKeyBinding from '../src/parts/ShowDefineKeyBinding/ShowDefineKeyBinding.ts'

const mockRpc = {
  invoke: jest.fn(),
} as any

beforeEach(() => {
  jest.resetAllMocks()
  ParentRpc.set(mockRpc)
})

test('showDefineKeyBinding', async () => {
  await ShowDefineKeyBinding.showDefineKeyBinding()
  expect(mockRpc.invoke).toHaveBeenCalledWith('Viewlet.openWidget', 'DefineKeyBinding')
})

test('showDefineKeyBinding - error handling', async () => {
  mockRpc.invoke.mockRejectedValue(new Error('Failed to show define key binding'))
  await expect(ShowDefineKeyBinding.showDefineKeyBinding()).rejects.toThrow('Failed to show define key binding')
  expect(mockRpc.invoke).toHaveBeenCalledWith('Viewlet.openWidget', 'DefineKeyBinding')
})
