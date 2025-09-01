import { expect, test } from '@jest/globals'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as CopyCommandId from '../src/parts/CopyCommandId/CopyCommandId.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('copyCommandId - writes focused command to clipboard', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })

  const state: KeyBindingsState = {
    ...createDefaultState(),
    items: [
      {
        command: 'test.command',
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

  const result: KeyBindingsState = await CopyCommandId.copyCommandId(state)

  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', 'test.command']])
  expect(result).toBe(state)
})

test('copyCommandId - no focused item does nothing', async () => {
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

  const result: KeyBindingsState = await CopyCommandId.copyCommandId(state)

  expect(result).toBe(state)
})
