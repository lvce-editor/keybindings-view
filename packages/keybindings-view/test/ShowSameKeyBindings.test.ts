import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'
const ShowSameKeyBindings = await import('../src/parts/ShowSameKeyBindings/ShowSameKeyBindings.ts')

test.skip('showSameKeyBindings - no focused item returns state', async () => {
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
    focusedIndex: -1,
  }

  const result: KeyBindingsState = await ShowSameKeyBindings.showSameKeyBindings(state)

  expect(result).toBe(state)
})

test.skip('showSameKeyBindings - sets value to focused keybinding and focuses input', async () => {
  let focusCalled = false
  let focusArgs: readonly any[] = []
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'Focus.setFocus') {
        focusCalled = true
        focusArgs = args
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state: KeyBindingsState = {
    ...createDefaultState(),
    parsedKeyBindings: [],
    maxVisibleItems: 10,
    items: [
      {
        command: 'test.command',
        key: 'Space',
        isCtrl: true,
        isShift: false,
      },
    ],
    focusedIndex: 0,
  }

  const result: KeyBindingsState = await ShowSameKeyBindings.showSameKeyBindings(state)

  expect(result.value).toBe('Ctrl+Space')
  expect(result.inputSource).toBe(InputSource.Script)
  expect(focusCalled).toBe(true)
  expect(focusArgs).toEqual([InputName.KeyBindingsFilter])
})
