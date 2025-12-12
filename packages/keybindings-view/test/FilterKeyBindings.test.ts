import { expect, test } from '@jest/globals'
import * as FilterKeyBindings from '../src/parts/FilterKeyBindings/FilterKeyBindings.ts'

test('getFilteredKeyBindings', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.focusNext',
      commandMatches: [],
      isCtrl: false,
      isShift: false,
      key: 'ArrowDown',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
    {
      command: 'EditorCompletion.focusPrevious',
      commandMatches: [],
      isCtrl: false,
      isShift: false,
      key: 'ArrowUp',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
  ]
  const value = 'focusNext'
  expect(FilterKeyBindings.getFilteredKeyBindings(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusNext',
      commandMatches: [21, 17, 26],
      isCtrl: false,
      isShift: false,
      key: 'ArrowDown',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
  ])
})

test('getFilteredKeyBindings - fuzzy search', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.focusNext',
      commandMatches: [],
      isCtrl: false,
      isShift: false,
      key: 'ArrowDown',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
    {
      command: 'EditorCompletion.focusPrevious',
      commandMatches: [],
      isCtrl: false,
      isShift: false,
      key: 'ArrowUp',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
  ]
  const value = 'fpr'
  expect(FilterKeyBindings.getFilteredKeyBindings(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusPrevious',
      commandMatches: [26, 17, 18, 22, 24],
      isCtrl: false,
      isShift: false,
      key: 'ArrowUp',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
  ])
})

test('getFilteredKeyBindings - exact quoted key match', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.focusNext',
      commandMatches: [],
      isCtrl: false,
      isShift: false,
      key: 'Ctrl + Space',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
    {
      command: 'EditorCompletion.focusPrevious',
      commandMatches: [],
      isCtrl: false,
      isShift: false,
      key: 'Ctrl + ArrowUp',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
  ]
  const value = '"Ctrl + Space"'
  expect(FilterKeyBindings.getFilteredKeyBindings(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusNext',
      commandMatches: [],
      isCtrl: false,
      isShift: false,
      key: 'Ctrl + Space',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
  ])
})
