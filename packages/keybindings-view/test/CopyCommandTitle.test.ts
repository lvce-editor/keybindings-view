import { expect, test } from '@jest/globals'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as CopyCommandTitle from '../src/parts/CopyCommandTitle/CopyCommandTitle.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('copyCommandTitle - writes focused command title to clipboard', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })

  const state: KeyBindingsState = {
    ...createDefaultState(),
    items: [
      {
        command: 'Test: Copy Title',
        key: 'A',
        when: 0,
        rawKey: 0,
        isCtrl: false,
        isShift: false,
        commandMatches: [],
        keyMatches: [],
      },
    ],
    focusedIndex: 0,
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
    items: [],
    focusedIndex: 0,
  }

  const result: KeyBindingsState = await CopyCommandTitle.copyCommandTitle(state)

  expect(result).toBe(state)
})
