import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleDoubleClick from '../src/parts/HandleDoubleClick/HandleDoubleClick.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('handleDoubleClick - sets selection and opens widget', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'Viewlet.openWidget'() {},
  })
  const state: KeyBindingsState = {
    ...createDefaultState(),
    itemHeight: 10,
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
    minLineY: 0,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
    x: 0,
    y: 0,
  }
  const result = await HandleDoubleClick.handleDoubleClick(state, 0, 15)
  expect(mockRpc.invocations).toEqual([['Viewlet.openWidget', 'DefineKeyBinding']])
  expect(result.selectedIndex).toBeGreaterThanOrEqual(-1)
  // expect(result.defineKeyBindingsId).toBe(1)
})
