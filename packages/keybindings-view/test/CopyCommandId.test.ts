import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
const CopyCommandId = await import('../src/parts/CopyCommandId/CopyCommandId.ts')

test('copyCommandId - writes focused command to clipboard', async () => {
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
    items: [{ command: 'test.command' }],
    focusedIndex: 0,
  }

  const result: KeyBindingsState = await CopyCommandId.copyCommandId(state)

  expect(called).toBe(true)
  expect(calledArgs).toEqual(['test.command'])
  expect(result).toBe(state)
})

test('copyCommandId - no focused item does nothing', async () => {
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

  const result: KeyBindingsState = await CopyCommandId.copyCommandId(state)

  expect(result).toBe(state)
})


