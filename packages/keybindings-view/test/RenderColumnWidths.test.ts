import { expect, test } from '@jest/globals'
import type { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'
import { renderColumnWidths } from '../src/parts/GetRenderer/RenderColumnWidths.ts'

test('renderColumnWidths', () => {
  const oldState: KeyBindingsState = {} as unknown as KeyBindingsState
  const newState: KeyBindingsState & { uid: number } = {
    uid: 1,
    columnWidth1: 100,
    columnWidth2: 200,
    columnWidth3: 300,
  } as unknown as KeyBindingsState & { uid: number }

  const result = renderColumnWidths(oldState, newState)

  expect(result).toEqual(['Viewlet.setCss', 1, '', 100, 200, 300])
})
