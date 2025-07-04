import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as KeyBindingsInitial from '../src/parts/KeyBindingsInitial/KeyBindingsInitial.ts'

test('getKeyBindings', async () => {
  const mockKeyBindings = [
    {
      command: 'test.command',
      key: 'A',
      when: 'editorFocus',
    },
  ]
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'KeyBindingsInitial.getKeyBindings') {
        return mockKeyBindings
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  const result = await KeyBindingsInitial.getKeyBindings()
  expect(result).toEqual(mockKeyBindings)
})

test('getKeyBindings - error handling', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      return Promise.reject(new Error('Failed to get key bindings'))
    },
  })
  RendererWorker.set(mockRpc)
  await expect(KeyBindingsInitial.getKeyBindings()).rejects.toThrow('Failed to get key bindings')
})
