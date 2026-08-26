import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RemoveKeyBinding from '../src/parts/RemoveKeyBinding/RemoveKeyBinding.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('removeKeyBinding - removes the selected binding', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.writeFile'() {},
  })
  const item = makeParsedKeyBinding({ command: 'test.remove', rawKey: 1 })
  const state = {
    ...createDefaultState(),
    items: [item],
    maxVisibleItems: 10,
    parsedKeyBindings: [item],
    selectedIndex: 0,
  }
  const result = await RemoveKeyBinding.removeKeyBinding(state)
  expect(result.parsedKeyBindings).toEqual([])
  expect(result.items).toEqual([])
  expect(result.selectedIndex).toBe(-1)
  expect(mockRpc.invocations).toHaveLength(1)
})
