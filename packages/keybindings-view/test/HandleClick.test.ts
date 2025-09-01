import { expect, test } from '@jest/globals'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as HandleClick from '../src/parts/HandleClick/HandleClick.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('handleClick - edit icon path triggers openWidget', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'Viewlet.openWidget'() {},
    'Focus.setFocus'() {},
    'KeyBindingsInitial.getKeyBindings'() {
      return []
    },
  })
  const state: KeyBindingsState = {
    ...createDefaultState(),
    padding: 10,
    editIconSize: 20,
    x: 0,
  }
  const eventX = 15 // Inside edit icon area (padding < x < padding+size)
  const eventY = 0
  const newState = await HandleClick.handleClick(state, eventX, eventY)
  expect(mockRpc.invocations).toEqual([
    ['KeyBindingsInitial.getKeyBindings'],
    ['Viewlet.openWidget', 'DefineKeyBinding'],
  ])
  expect(newState.focus).toBe(FocusKey.Table)
})

test('handleClick - outside edit icon triggers focus set', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'Focus.setFocus'() {},
    'KeyBindingsInitial.getKeyBindings'() {
      return []
    },
  })
  const state = {
    ...createDefaultState(),
    padding: 10,
    editIconSize: 20,
    x: 0,
    focus: WhenExpression.FocusKeyBindingsWhenExpression,
  }
  const eventX = 100 // Outside edit icon
  const eventY = 0
  const newState = await HandleClick.handleClick(state, eventX, eventY)
  expect(mockRpc.invocations).toEqual([
    ['KeyBindingsInitial.getKeyBindings'],
    ['Focus.setFocus', WhenExpression.FocusKeyBindingsTable],
  ])
  expect(newState.focus).toBe(FocusKey.Table)
})
