import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import * as LoadKeyBindings from '../src/parts/LoadKeyBindings/LoadKeyBindings.ts'

test('loadKeyBindings - loads persisted keybindings when available', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.readFile'() {
      return JSON.stringify([{ command: 'test.persisted', key: KeyCode.KeyB, source: 'User', when: 0 }])
    },
    'KeyBindingsInitial.getKeyBindings'() {
      return [{ command: 'test.default', key: KeyCode.KeyA, when: 0 }]
    },
  })

  const result = await LoadKeyBindings.loadKeyBindings()

  expect(result).toHaveLength(1)
  expect(result[0]).toMatchObject({
    command: 'test.persisted',
    key: 'b',
    rawKey: KeyCode.KeyB,
    source: 'User',
  })
  expect(mockRpc.invocations).toEqual([['KeyBindingsInitial.getKeyBindings'], ['FileSystem.readFile', 'app://keybindings.json']])
})

test('loadKeyBindings - falls back to defaults for invalid persisted content', async () => {
  RendererWorker.registerMockRpc({
    'FileSystem.readFile'() {
      return '{}'
    },
    'KeyBindingsInitial.getKeyBindings'() {
      return [{ command: 'test.default', key: KeyCode.KeyA, when: 0 }]
    },
  })

  const result = await LoadKeyBindings.loadKeyBindings()

  expect(result).toHaveLength(1)
  expect(result[0].command).toBe('test.default')
})
