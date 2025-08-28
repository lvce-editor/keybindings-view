import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffKeyBindings from '../src/parts/DiffKeyBindings/DiffKeyBindings.ts'

const base = (): any => {
  const commonItems = [1, 2, 3] as any[]
  const s = {
    ...createDefaultState(),
    items: commonItems,
    minLineY: 0,
    maxLineY: 3,
    selectedIndex: 0,
    focusedIndex: 0,
    columnWidth1: 100,
    columnWidth2: 200,
    columnWidth3: 300,
    isRecordingKeys: false,
    isSortingByPrecedence: false,
    editingWhenExpression: false,
  }
  return { s, commonItems }
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
