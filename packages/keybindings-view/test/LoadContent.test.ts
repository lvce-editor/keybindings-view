import { expect, test } from '@jest/globals'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as LoadContent from '../src/parts/LoadContent/LoadContent.ts'

test('loadContent - computes derived fields and restores saved state', async () => {
  RendererWorker.registerMockRpc({
    'KeyBindingsInitial.getKeyBindings'() {
      return [
        { command: 'a', key: KeyCode.KeyA, when: 0 },
        { command: 'b', key: KeyCode.KeyB, when: 0 },
      ]
    },
  })
  const base: KeyBindingsState = {
    ...createDefaultState(),
    height: 200,
    searchHeaderHeight: 30,
    tableHeaderHeight: 20,
    itemHeight: 10,
    width: 300,
    contentPadding: 30,
  }
  const saved = { value: 'a', isRecordingKeys: true, isSortingByPrecedence: true, selectedIndex: 1 }
  const newState = await LoadContent.loadContent(base, saved)
  expect(newState.items.length).toBeGreaterThan(0)
  expect(newState.maxVisibleItems).toBeGreaterThan(0)
  expect(newState.columnWidth1).toBeGreaterThan(0)
  expect(newState.isRecordingKeys).toBe(true)
  expect(newState.isSortingByPrecedence).toBe(true)
  expect(newState.selectedIndex).toBe(1)
})
