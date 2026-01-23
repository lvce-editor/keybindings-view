import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as CopyCommandTitle from '../src/parts/CopyCommandTitle/CopyCommandTitle.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('copyCommandTitle - writes focused command title to clipboard', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })

  const state: KeyBindingsState = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [
      {
        command: 'Test: Copy Title',
        commandMatches: [],
        isCtrl: false,
        isShift: false,
        key: 'A',
        keyMatches: [],
        rawKey: 0,
        when: 0,
      },
    ],
  }

  const result: KeyBindingsState = await CopyCommandTitle.copyCommandTitle(state)

  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', 'Test: Copy Title']])
  expect(result).toBe(state)
})

test('copyCommandTitle - no focused item does nothing', async () => {
  RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {
      throw new Error('should not be called')
    },
  })

  const state: KeyBindingsState = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [],
  }

  const result: KeyBindingsState = await CopyCommandTitle.copyCommandTitle(state)

  expect(result).toBe(state)
})
