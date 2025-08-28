import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as CopyCommandTitle from '../src/parts/CopyCommandTitle/CopyCommandTitle.ts'

test('copyCommandTitle - writes focused command title to clipboard', async () => {
  let called = false
  let calledArgs: readonly any[] = []
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ClipBoard.writeText') {
        called = true
        calledArgs = args
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

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

  expect(called).toBe(true)
  expect(calledArgs).toEqual(['Test: Copy Title'])
  expect(result).toBe(state)
})

test('copyCommandTitle - no focused item does nothing', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state: KeyBindingsState = {
    ...createDefaultState(),
    items: [],
    focusedIndex: 0,
  }

  const result: KeyBindingsState = await CopyCommandTitle.copyCommandTitle(state)

  expect(result).toBe(state)
})
