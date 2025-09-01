import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleDoubleClick from '../src/parts/HandleDoubleClick/HandleDoubleClick.ts'
import { makeParsedKeyBinding } from './_helpers/fixtures.ts'

test('handleDoubleClick - sets selection and opens widget', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'Viewlet.openWidget'() {},
  })
  const state: KeyBindingsState = {
    ...createDefaultState(),
    x: 0,
    y: 0,
    minLineY: 0,
    itemHeight: 10,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
    items: [makeParsedKeyBinding(), makeParsedKeyBinding(), makeParsedKeyBinding()],
  }
  const result = await HandleDoubleClick.handleDoubleClick(state as any, 0, 15)
  expect(mockRpc.invocations).toEqual([['Viewlet.openWidget', 'DefineKeyBinding']])
  expect(result.selectedIndex).toBeGreaterThanOrEqual(-1)
  expect(result.defineKeyBindingsId).toBe(1)
})
