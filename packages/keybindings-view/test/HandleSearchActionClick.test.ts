import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleSearchActionClick from '../src/parts/HandleSearchActionClick/HandleSearchActionClick.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import { KeyBindingsState } from '../src/parts/KeyBindingsState/KeyBindingsState.ts'

// minimal checks: ClearSearchInput should clear value
// RecordKeys toggles isRecordingKeys
// SortByPrecedence toggles isSortingByPrecedence

test('handleSearchActionClick - ClearSearchInput', () => {
  const state: KeyBindingsState = { ...createDefaultState(), value: 'abc' }
  const newState: KeyBindingsState = HandleSearchActionClick.handleSearchActionClick(state, InputName.ClearSearchInput)
  expect(newState.value).toBe('')
})

test('handleSearchActionClick - RecordKeys', () => {
  const state: KeyBindingsState = { ...createDefaultState(), isRecordingKeys: false }
  const newState: KeyBindingsState = HandleSearchActionClick.handleSearchActionClick(state, InputName.RecordKeys)
  expect(newState.isRecordingKeys).toBe(true)
})

test('handleSearchActionClick - SortByPrecedence', () => {
  const state: KeyBindingsState = { ...createDefaultState(), isSortingByPrecedence: false }
  const newState: KeyBindingsState = HandleSearchActionClick.handleSearchActionClick(state, InputName.SortByPrecedence)
  expect(newState.isSortingByPrecedence).toBe(true)
})
