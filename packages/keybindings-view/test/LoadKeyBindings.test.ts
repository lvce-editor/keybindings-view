import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import * as LoadKeyBindings from '../src/parts/LoadKeyBindings/LoadKeyBindings.ts'
import * as ParseKeyBindingString from '../src/parts/ParseKeyBindingString/ParseKeyBindingString.ts'

test('loadKeyBindings - keeps defaults and adds persisted user keybindings', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.readFile'() {
      return JSON.stringify([{ command: 'test.persisted', key: KeyCode.KeyB, source: 'User', when: 0 }])
    },
    'KeyBindingsInitial.getKeyBindings'() {
      return [{ command: 'test.default', key: KeyCode.KeyA, when: 0 }]
    },
  })

  const result = await LoadKeyBindings.loadKeyBindings()

  expect(result).toHaveLength(2)
  expect(result[0]).toMatchObject({ command: 'test.default', source: 'System' })
  expect(result[1]).toMatchObject({
    command: 'test.persisted',
    key: 'b',
    rawKey: KeyCode.KeyB,
    source: 'User',
  })
  expect(mockRpc.invocations).toEqual([['KeyBindingsInitial.getKeyBindings'], ['FileSystem.readFile', 'app://keybindings.json']])
})

test('loadKeyBindings - parses persisted string keybindings and ignores malformed rows', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.readFile'() {
      return JSON.stringify([
        { command: 'test.persisted', key: 'Ctrl+Shift+9', source: 'User', when: 0 },
        { command: 'test.invalid', key: 'Ctrl+NotAKey', source: 'User', when: 0 },
        { key: 'Ctrl+Shift+8', source: 'User', when: 0 },
      ])
    },
    'KeyBindingsInitial.getKeyBindings'() {
      return [{ command: 'test.default', key: KeyCode.KeyA, when: 0 }]
    },
  })

  const result = await LoadKeyBindings.loadKeyBindings()

  expect(result).toHaveLength(2)
  expect(result[0]).toMatchObject({ command: 'test.default', source: 'System' })
  expect(result[1]).toMatchObject({
    command: 'test.persisted',
    isCtrl: true,
    isShift: true,
    key: '9',
    rawKey: ParseKeyBindingString.parseKeyBindingString('Ctrl+Shift+9'),
    source: 'User',
  })
  expect(mockRpc.invocations).toEqual([['KeyBindingsInitial.getKeyBindings'], ['FileSystem.readFile', 'app://keybindings.json']])
})

test('loadKeyBindings - keeps persisted snapshots authoritative after removal', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.readFile'() {
      return JSON.stringify([{ command: 'test.user', key: 'Ctrl+Shift+9', source: 'User', when: 0 }, { $type: 'keybindings-snapshot' }])
    },
    'KeyBindingsInitial.getKeyBindings'() {
      return [{ command: 'test.default', key: KeyCode.KeyA, when: 0 }]
    },
  })

  const result = await LoadKeyBindings.loadKeyBindings()

  expect(result).toHaveLength(1)
  expect(result[0].command).toBe('test.user')
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
