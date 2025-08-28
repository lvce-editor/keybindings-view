import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleDoubleClick from '../src/parts/HandleDoubleClick/HandleDoubleClick.ts'
import { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'

test('handleDoubleClick - sets selection and opens widget', async () => {
  let opened = false
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Viewlet.openWidget') {
        opened = true
        return undefined
      }
      return undefined
    },
  })
  RendererWorker.set(mockRpc)
  const s: KeyBindingsState = {
    ...createDefaultState(),
    x: 0,
    y: 0,
    minLineY: 0,
    itemHeight: 10,
    searchHeaderHeight: 0,
    tableHeaderHeight: 0,
    items: [{}, {}, {}],
  }
  const r = await HandleDoubleClick.handleDoubleClick(s as any, 0, 15)
  expect(opened).toBe(true)
  expect(r.selectedIndex).toBeGreaterThanOrEqual(-1)
  expect(r.defineKeyBindingsId).toBe(1)
})
