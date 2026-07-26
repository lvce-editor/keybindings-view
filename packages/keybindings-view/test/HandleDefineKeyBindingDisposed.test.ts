import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { KeyCode } from '@lvce-editor/virtual-dom-worker'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DefineKeyBindingMode from '../src/parts/DefineKeyBindingMode/DefineKeyBindingMode.ts'
import * as HandleDefineKeyBindingDisposed from '../src/parts/HandleDefineKeyBindingDisposed/HandleDefineKeyBindingDisposed.ts'
import * as KeyModifier from '../src/parts/KeyModifier/KeyModifier.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('handleDefineKeyBindingDisposed - changes the selected binding', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.writeFile'() {},
  })
  const item = makeParsedKeyBinding({ command: 'test.change', rawKey: KeyCode.Escape })
  const state = {
    ...createDefaultState(),
    defineKeyBindingsId: DefineKeyBindingMode.Change,
    items: [item],
    maxVisibleItems: 10,
    parsedKeyBindings: [item],
    selectedIndex: 0,
  }

  const result = await HandleDefineKeyBindingDisposed.handleDefineKeyBindingDisposed(state, 'Ctrl+Alt+9')

  expect(result.parsedKeyBindings).toHaveLength(1)
  expect(result.parsedKeyBindings[0]).toMatchObject({
    command: 'test.change',
    isAlt: true,
    isCtrl: true,
    key: '9',
    rawKey: KeyModifier.CtrlCmd | KeyModifier.Alt | KeyCode.Digit9,
    source: 'User',
  })
  expect(mockRpc.invocations).toHaveLength(1)
})

test('handleDefineKeyBindingDisposed - adds a second binding', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'FileSystem.writeFile'() {},
  })
  const item = makeParsedKeyBinding({ command: 'test.add', rawKey: KeyCode.Escape })
  const state = {
    ...createDefaultState(),
    defineKeyBindingsId: DefineKeyBindingMode.Add,
    items: [item],
    maxVisibleItems: 10,
    parsedKeyBindings: [item],
    selectedIndex: 0,
  }

  const result = await HandleDefineKeyBindingDisposed.handleDefineKeyBindingDisposed(state, 'Shift+Z')

  expect(result.parsedKeyBindings).toHaveLength(2)
  expect(result.parsedKeyBindings[1]).toMatchObject({
    command: 'test.add',
    isShift: true,
    key: 'z',
    source: 'User',
  })
  expect(mockRpc.invocations).toHaveLength(1)
})
