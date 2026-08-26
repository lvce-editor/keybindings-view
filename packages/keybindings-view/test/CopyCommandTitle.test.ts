import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as CopyCommandTitle from '../src/parts/CopyCommandTitle/CopyCommandTitle.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('copyCommandTitle - writes focused command title to clipboard', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
    'Layout.getAllQuickPickMenuEntries'() {
      return [
        {
          id: 'ActivityBar.focusNext',
          label: 'ActivityBar: Focus Next',
        },
      ]
    },
  })

  const state: KeyBindingsState = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [
      {
        command: 'ActivityBar.focusNext',
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

  expect(mockRpc.invocations).toEqual([['Layout.getAllQuickPickMenuEntries'], ['ClipBoard.writeText', 'ActivityBar: Focus Next']])
  expect(result).toBe(state)
})

test('copyCommandTitle - falls back to command id when title is unavailable', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
    'Layout.getAllQuickPickMenuEntries'() {
      return []
    },
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

  const result: KeyBindingsState = await CopyCommandTitle.copyCommandTitle(state)

  expect(mockRpc.invocations).toEqual([['Layout.getAllQuickPickMenuEntries'], ['ClipBoard.writeText', 'test.command']])
  expect(result).toBe(state)
})

test('copyCommandTitle - no focused item does nothing', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {
      throw new Error('should not be called')
    },
    'Layout.getAllQuickPickMenuEntries'() {
      throw new Error('should not be called')
    },
  })

  const state: KeyBindingsState = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [],
  }

  const result: KeyBindingsState = await CopyCommandTitle.copyCommandTitle(state)

  expect(mockRpc.invocations).toEqual([])
  expect(result).toBe(state)
})
