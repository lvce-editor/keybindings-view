import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffKeyBindings from '../src/parts/DiffKeyBindings/DiffKeyBindings.ts'

const base = (): any => {
  const commonItems = [1, 2, 3] as any[]
  const s = {
    ...createDefaultState(),
    columnWidth1: 100,
    columnWidth2: 200,
    columnWidth3: 300,
    editingWhenExpression: false,
    focusedIndex: 0,
    isRecordingKeys: false,
    isSortingByPrecedence: false,
    items: commonItems,
    maxLineY: 3,
    minLineY: 0,
    selectedIndex: 0,
  }
  return { commonItems, s }
}

test('isEqual - identical keybinding-related fields', () => {
  const { s } = base()
  const a = s
  const b = s
  expect(DiffKeyBindings.isEqual(a, b)).toBe(true)
})

test('isEqual - change items reference -> not equal', () => {
  const { s } = base()
  const a = s
  const b = { ...s, items: [1, 2, 3] as any[] }
  expect(DiffKeyBindings.isEqual(a, b)).toBe(false)
})
