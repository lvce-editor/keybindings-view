import { expect, test } from '@jest/globals'
import * as FilterKeyBindings from '../src/parts/FilterKeyBindings/FilterKeyBindings.ts'

test('getFilteredKeyBindings', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.focusNext',
      key: 'ArrowDown',
      when: 0,
      rawKey: 0,
      isCtrl: false,
      isShift: false,
    },
    {
      command: 'EditorCompletion.focusPrevious',
      key: 'ArrowUp',
      when: 0,
      rawKey: 0,
      isCtrl: false,
      isShift: false,
    },
  ]
  const value = 'focusNext'
  expect(FilterKeyBindings.getFilteredKeyBindings(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusNext',
      key: 'ArrowDown',
      keyMatches: [],
      commandMatches: [21, 17, 26],
    },
  ])
})

test('getFilteredKeyBindings - fuzzy search', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.focusNext',
      key: 'ArrowDown',
      when: 0,
      rawKey: 0,
      isCtrl: false,
      isShift: false,
    },
    {
      command: 'EditorCompletion.focusPrevious',
      key: 'ArrowUp',
      when: 0,
      rawKey: 0,
      isCtrl: false,
      isShift: false,
    },
  ]
  const value = 'fpr'
  expect(FilterKeyBindings.getFilteredKeyBindings(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusPrevious',
      key: 'ArrowUp',
      commandMatches: [26, 17, 18, 22, 24],
      keyMatches: [],
    },
  ])
})

test('getFilteredKeyBindings - exact quoted key match', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.focusNext',
      key: 'Ctrl + Space',
    },
    {
      command: 'EditorCompletion.focusPrevious',
      key: 'Ctrl + ArrowUp',
    },
  ]
  const value = '"Ctrl + Space"'
  expect(FilterKeyBindings.getFilteredKeyBindings(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusNext',
      key: 'Ctrl + Space',
      keyMatches: [],
      commandMatches: [],
    },
  ])
})
