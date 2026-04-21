import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as CopyCommandId from '../src/parts/CopyCommandId/CopyCommandId.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('copyCommandId - writes focused command to clipboard', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })

  const state: KeyBindingsState = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [
      {
        command: 'test.command',
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

  const result: KeyBindingsState = await CopyCommandId.copyCommandId(state)

  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', 'test.command']])
  expect(result).toBe(state)
})

test('copyCommandId - no focused item does nothing', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {
      throw new Error('should not be called')
    },
  })

  const state: KeyBindingsState = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [],
  }

  const result: KeyBindingsState = await CopyCommandId.copyCommandId(state)

  expect(mockRpc.invocations).toEqual([])
  expect(result).toBe(state)
})
