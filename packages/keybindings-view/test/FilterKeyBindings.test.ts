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
      commandMatches: [],
      keyMatches: [],
    },
    {
      command: 'EditorCompletion.focusPrevious',
      key: 'ArrowUp',
      when: 0,
      rawKey: 0,
      isCtrl: false,
      isShift: false,
      commandMatches: [],
      keyMatches: [],
    },
  ]
  const value = 'focusNext'
  expect(FilterKeyBindings.getFilteredKeyBindings(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusNext',
      isCtrl: false,
      isShift: false,
      key: 'ArrowDown',
      keyMatches: [],
      commandMatches: [21, 17, 26],
      when: 0,
      rawKey: 0,
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
      commandMatches: [],
      keyMatches: [],
    },
    {
      command: 'EditorCompletion.focusPrevious',
      key: 'ArrowUp',
      when: 0,
      rawKey: 0,
      isCtrl: false,
      isShift: false,
      commandMatches: [],
      keyMatches: [],
    },
  ]
  const value = 'fpr'
  expect(FilterKeyBindings.getFilteredKeyBindings(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusPrevious',
      isCtrl: false,
      isShift: false,
      key: 'ArrowUp',
      commandMatches: [26, 17, 18, 22, 24],
      keyMatches: [],
      when: 0,
      rawKey: 0,
    },
  ])
})

test('getFilteredKeyBindings - exact quoted key match', () => {
  const keyBindings = [
    {
      command: 'EditorCompletion.focusNext',
      key: 'Ctrl + Space',
      when: 0,
      rawKey: 0,
      isCtrl: false,
      isShift: false,
      commandMatches: [],
      keyMatches: [],
    },
    {
      command: 'EditorCompletion.focusPrevious',
      key: 'Ctrl + ArrowUp',
      when: 0,
      rawKey: 0,
      isCtrl: false,
      isShift: false,
      commandMatches: [],
      keyMatches: [],
    },
  ]
  const value = '"Ctrl + Space"'
  expect(FilterKeyBindings.getFilteredKeyBindings(keyBindings, value)).toEqual([
    {
      command: 'EditorCompletion.focusNext',
      isCtrl: false,
      isShift: false,
      key: 'Ctrl + Space',
      keyMatches: [],
      commandMatches: [],
      when: 0,
      rawKey: 0,
    },
  ])
})
