import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as KeyCode from '../src/parts/KeyCode/KeyCode.ts'
import * as LoadContent from '../src/parts/LoadContent/LoadContent.ts'
import { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'

test('loadContent - computes derived fields and restores saved state', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'KeyBindingsInitial.getKeyBindings') {
        return [
          { command: 'a', key: KeyCode.KeyA, when: 0 },
          { command: 'b', key: KeyCode.KeyB, when: 0 },
        ]
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
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
