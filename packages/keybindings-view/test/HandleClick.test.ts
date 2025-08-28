import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as HandleClick from '../src/parts/HandleClick/HandleClick.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('handleClick - edit icon path triggers openWidget', async () => {
  let opened = false
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Viewlet.openWidget') {
        opened = true
        return undefined
      }
      if (method === 'Focus.setFocus') {
        return undefined
      }
      if (method === 'KeyBindingsInitial.getKeyBindings') {
        return []
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  const state: KeyBindingsState = { ...createDefaultState(), padding: 10, editIconSize: 20, x: 0 }
  const eventX = 15 // inside edit icon area (padding < x < padding+size)
  const eventY = 0
  const newState = await HandleClick.handleClick(state, eventX, eventY)
  expect(opened).toBe(true)
  expect(newState.focus).toBe(FocusKey.Table)
})

test('handleClick - outside edit icon triggers focus set', async () => {
  let focused = false
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Focus.setFocus') {
        focused = true
        return undefined
      }
      if (method === 'KeyBindingsInitial.getKeyBindings') {
        return []
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)
  const state = { ...createDefaultState(), padding: 10, editIconSize: 20, x: 0, focus: WhenExpression.FocusKeyBindingsWhenExpression }
  const eventX = 100 // outside edit icon
  const eventY = 0
  const newState = await HandleClick.handleClick(state, eventX, eventY)
  expect(focused).toBe(true)
  expect(newState.focus).toBe(FocusKey.Table)
})
