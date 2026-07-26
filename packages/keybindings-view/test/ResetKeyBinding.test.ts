import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ResetKeyBinding from '../src/parts/ResetKeyBinding/ResetKeyBinding.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('resetKeyBinding - returns same state without a selected user binding', async () => {
  const state = createDefaultState()
  const result = await ResetKeyBinding.resetKeyBinding(state)
  expect(result).toBe(state)
})

test('resetKeyBinding - restores the default binding', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.writeFile'() {},
    'KeyBindingsInitial.getKeyBindings'() {
      return [{ command: 'test.reset', key: KeyCode.Escape, source: 'System', when: 3 }]
    },
  })
  const userBinding = makeParsedKeyBinding({
    command: 'test.reset',
    rawKey: KeyCode.KeyA,
    source: 'User',
    when: 3,
  })
  const followingBinding = makeParsedKeyBinding({
    command: 'test.following',
    rawKey: KeyCode.KeyB,
    source: 'System',
    when: 0,
  })
  const state = {
    ...createDefaultState(),
    items: [userBinding],
    maxVisibleItems: 10,
    parsedKeyBindings: [userBinding, followingBinding],
    selectedIndex: 0,
  }

  const result = await ResetKeyBinding.resetKeyBinding(state)

  expect(result.parsedKeyBindings).toHaveLength(2)
  expect(result.parsedKeyBindings[0]).toMatchObject({
    command: 'test.reset',
    rawKey: KeyCode.Escape,
    source: 'System',
  })
  expect(result.parsedKeyBindings[1]).toBe(followingBinding)
  expect(mockRpc.invocations.map((invocation) => invocation[0])).toEqual(['KeyBindingsInitial.getKeyBindings', 'FileSystem.writeFile'])
})

test('resetKeyBinding - removes an added binding without duplicating the default', async () => {
  RendererWorker.registerMockRpc({
    'FileSystem.writeFile'() {},
    'KeyBindingsInitial.getKeyBindings'() {
      return [{ command: 'test.reset', key: KeyCode.Escape, source: 'System', when: 3 }]
    },
  })
  const defaultBinding = makeParsedKeyBinding({
    command: 'test.reset',
    rawKey: KeyCode.Escape,
    source: 'System',
    when: 3,
  })
  const addedBinding = makeParsedKeyBinding({
    command: 'test.reset',
    rawKey: KeyCode.KeyA,
    source: 'User',
    when: 3,
  })
  const state = {
    ...createDefaultState(),
    items: [defaultBinding, addedBinding],
    maxVisibleItems: 10,
    parsedKeyBindings: [defaultBinding, addedBinding],
    selectedIndex: 1,
  }

  const result = await ResetKeyBinding.resetKeyBinding(state)

  expect(result.parsedKeyBindings).toEqual([defaultBinding])
})
