import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as LoadContent from '../src/parts/LoadContent/LoadContent.ts'

test('loadContent - computes derived fields and restores saved state', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'KeyBindingsInitial.getKeyBindings'() {
      return [
        { command: 'a', key: KeyCode.KeyA, when: 0 },
        { command: 'b', key: KeyCode.KeyB, when: 0 },
      ]
    },
  })
  const base: KeyBindingsState = {
    ...createDefaultState(),
    contentPadding: 30,
    height: 200,
    itemHeight: 10,
    searchHeaderHeight: 30,
    tableHeaderHeight: 20,
    width: 300,
  }
  const saved = { isRecordingKeys: true, isSortingByPrecedence: true, selectedIndex: 1, value: 'a' }
  const newState = await LoadContent.loadContent(base, saved)
  expect(mockRpc.invocations).toEqual([['KeyBindingsInitial.getKeyBindings']])
  expect(newState.items.length).toBeGreaterThan(0)
  expect(newState.maxVisibleItems).toBeGreaterThan(0)
  expect(newState.columnWidth1).toBeGreaterThan(0)
  expect(newState.isRecordingKeys).toBe(true)
  expect(newState.isSortingByPrecedence).toBe(true)
  expect(newState.selectedIndex).toBe(1)
})
