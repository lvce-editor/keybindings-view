import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import * as PersistKeyBindings from '../src/parts/PersistKeyBindings/PersistKeyBindings.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('persistKeyBindings - writes raw keybindings to app storage', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.writeFile'() {},
  })
  const keyBinding = makeParsedKeyBinding({
    command: 'test.persist',
    rawKey: KeyCode.KeyA,
    source: 'User',
    when: 3,
  })

  await PersistKeyBindings.persistKeyBindings([keyBinding])

  expect(mockRpc.invocations).toEqual([
    [
      'FileSystem.writeFile',
      'app://keybindings.json',
      JSON.stringify([{ command: 'test.persist', key: KeyCode.KeyA, source: 'User', when: 3 }], null, 2),
    ],
  ])
})
