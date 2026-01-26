import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'
import * as ShowSameKeyBindings from '../src/parts/ShowSameKeyBindings/ShowSameKeyBindings.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('showSameKeyBindings - no item selected returns state', async () => {
  const state: KeyBindingsState = createDefaultState()
  const result = await ShowSameKeyBindings.showSameKeyBindings(state)
  expect(result).toBe(state)
})

test('showSameKeyBindings - sets value to quoted key with spaces', async () => {
  const state: KeyBindingsState = {
    ...createDefaultState(),
    items: [makeParsedKeyBinding({ isCtrl: true, isShift: true, key: 'A' })],
    maxVisibleItems: 10,
    parsedKeyBindings: [],
    selectedIndex: 0,
  }
  const result = await ShowSameKeyBindings.showSameKeyBindings(state)
  expect(typeof result.value).toBe('string')
  expect(result.value).toContain('"')
  expect(result.value).toContain(' + ')
})

test('showSameKeyBindings - no focused item returns state', async () => {
  using mockRpc = RendererWorker.registerMockRpc({})

  const state: KeyBindingsState = {
    ...createDefaultState(),
    focusedIndex: -1,
    items: [],
  }

  const result: KeyBindingsState = await ShowSameKeyBindings.showSameKeyBindings(state)

  expect(mockRpc.invocations).toEqual([])
  expect(result).toBe(state)
})

test('showSameKeyBindings - sets value to focused keybinding and focuses input', async () => {
  using mockRpc = RendererWorker.registerMockRpc({})

  const state: KeyBindingsState = {
    ...createDefaultState(),
    selectedIndex: 0,
    items: [
      makeParsedKeyBinding({
        command: 'test.command',
        isCtrl: true,
        isShift: false,
        key: 'Space',
      }),
    ],
    maxVisibleItems: 10,
    parsedKeyBindings: [],
  }

  const result: KeyBindingsState = await ShowSameKeyBindings.showSameKeyBindings(state)

  expect(mockRpc.invocations).toEqual([])
  expect(result.value).toBe('"Ctrl + Space"')
  expect(result.inputSource).toBe(InputSource.Script)
})
