import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import * as AddKeyBinding from '../src/parts/AddKeyBinding/AddKeyBinding.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DefineKeyBindingMode from '../src/parts/DefineKeyBindingMode/DefineKeyBindingMode.ts'
import * as KeyBindingsStates from '../src/parts/KeyBindingsStates/KeyBindingsStates.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('addKeyBinding - opens the keybinding widget and records add mode', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'Viewlet.openWidget'() {},
  })
  const state: KeyBindingsState = {
    ...createDefaultState(),
    items: [makeParsedKeyBinding()],
    selectedIndex: 0,
  }

  const result = await AddKeyBinding.addKeyBinding(state)

  expect(mockRpc.invocations).toEqual([['Viewlet.openWidget', 'DefineKeyBinding', 1]])
  expect(result).toBe(state)
  expect(KeyBindingsStates.get(state.uid).newState.defineKeyBindingsId).toBe(DefineKeyBindingMode.Add)
})
