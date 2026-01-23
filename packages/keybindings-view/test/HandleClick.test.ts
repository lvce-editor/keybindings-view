import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as HandleClick from '../src/parts/HandleClick/HandleClick.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test.skip('handleClick - edit icon path triggers openWidget', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'Focus.setFocus'() {},
    'KeyBindingsInitial.getKeyBindings'() {
      return []
    },
    'Viewlet.openWidget'() {},
  })
  const state: KeyBindingsState = {
    ...createDefaultState(),
    editIconSize: 20,
    padding: 10,
    x: 0,
  }
  const eventX = 15 // Inside edit icon area (padding < x < padding+size)
  const eventY = 0
  const newState = await HandleClick.handleClick(state, eventX, eventY)
  expect(mockRpc.invocations).toEqual([['Viewlet.openWidget', 'DefineKeyBinding']])
  expect(newState.focus).toBe(WhenExpression.FocusKeyBindingsTable)
})

test.skip('handleClick - outside edit icon triggers focus set', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'Focus.setFocus'() {},
    'KeyBindingsInitial.getKeyBindings'() {
      return []
    },
  })
  const state = {
    ...createDefaultState(),
    editIconSize: 20,
    focus: WhenExpression.FocusKeyBindingsWhenExpression,
    padding: 10,
    x: 0,
  }
  const eventX = 100 // Outside edit icon
  const eventY = 0
  const newState = await HandleClick.handleClick(state, eventX, eventY)
  expect(mockRpc.invocations).toEqual([['Focus.setFocus', WhenExpression.FocusKeyBindingsTable]])
  expect(newState.focus).toBe(FocusKey.Table)
})
