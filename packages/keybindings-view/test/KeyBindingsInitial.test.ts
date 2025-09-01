import { expect, test } from '@jest/globals'
import * as KeyBindingsInitial from '../src/parts/KeyBindingsInitial/KeyBindingsInitial.ts'
import { RendererWorker } from '@lvce-editor/rpc-registry'

test('getKeyBindings', async () => {
  const mockKeyBindings = [
    {
      command: 'test.command',
      key: 'A',
      when: 'editorFocus',
    },
  ]
  const mockRpc = RendererWorker.registerMockRpc({
    'KeyBindingsInitial.getKeyBindings'() {
      return mockKeyBindings
    },
  })
  const result = await KeyBindingsInitial.getKeyBindings()
  expect(result).toEqual(mockKeyBindings)
  expect(mockRpc.invocations).toEqual([['KeyBindingsInitial.getKeyBindings']])
})

test('getKeyBindings - error handling', async () => {
  RendererWorker.registerMockRpc({
    'KeyBindingsInitial.getKeyBindings'() {
      return Promise.reject(new Error('Failed to get key bindings'))
    },
  })
  await expect(KeyBindingsInitial.getKeyBindings()).rejects.toThrow('Failed to get key bindings')
})
