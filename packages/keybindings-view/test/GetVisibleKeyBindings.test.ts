import { expect, test } from '@jest/globals'
import * as GetVisibleKeyBindings from '../src/parts/GetVisibleKeyBindings/GetVisibleKeyBindings.ts'

test('getVisibleKeyBindings - empty array', () => {
  expect(GetVisibleKeyBindings.getVisibleKeyBindings([], 0, 0, -1, false)).toEqual([])
})

test('getVisibleKeyBindings - single item', () => {
  const keyBindings = [
    {
      command: 'test.command',
      commandMatches: [],
      isCtrl: false,
      isEditingWhenExpression: false,
      isShift: false,
      key: 'A',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
  ]
  expect(GetVisibleKeyBindings.getVisibleKeyBindings(keyBindings, 0, 1, -1, false)).toEqual([
    {
      command: 'test.command',
      commandMatches: [],
      isCtrl: false,
      isEditingWhenExpression: false,
      isEven: true,
      isShift: false,
      key: 'A',
      keyMatches: [],
      rowIndex: 2,
      selected: false,
      when: 'Empty',
    },
  ])
})

test('getVisibleKeyBindings - multiple items', () => {
  const keyBindings = [
    {
      command: 'test.command1',
      commandMatches: [],
      isCtrl: true,
      isEditingWhenExpression: false,
      isShift: false,
      key: 'A',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
    {
      command: 'test.command2',
      commandMatches: [],
      isCtrl: false,
      isEditingWhenExpression: false,
      isShift: true,
      key: 'B',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
  ]
  expect(GetVisibleKeyBindings.getVisibleKeyBindings(keyBindings, 0, 2, 1, false)).toEqual([
    {
      command: 'test.command1',
      commandMatches: [],
      isCtrl: true,
      isEditingWhenExpression: false,
      isEven: true,
      isShift: false,
      key: 'A',
      keyMatches: [],
      rowIndex: 2,
      selected: false,
      when: 'Empty',
    },
    {
      command: 'test.command2',
      commandMatches: [],
      isCtrl: false,
      isEditingWhenExpression: false,
      isEven: false,
      isShift: true,
      key: 'B',
      keyMatches: [],
      rowIndex: 3,
      selected: true,
      when: 'Empty',
    },
  ])
})

test('getVisibleKeyBindings - with slice', () => {
  const keyBindings = [
    {
      command: 'test.command1',
      commandMatches: [],
      isCtrl: true,
      isEditingWhenExpression: false,
      isShift: false,
      key: 'A',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
    {
      command: 'test.command2',
      commandMatches: [],
      isCtrl: false,
      isEditingWhenExpression: false,
      isShift: true,
      key: 'B',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
    {
      command: 'test.command3',
      commandMatches: [],
      isCtrl: true,
      isEditingWhenExpression: false,
      isShift: true,
      key: 'C',
      keyMatches: [],
      rawKey: 0,
      when: 0,
    },
  ]
  expect(GetVisibleKeyBindings.getVisibleKeyBindings(keyBindings, 1, 3, 1, false)).toEqual([
    {
      command: 'test.command2',
      commandMatches: [],
      isCtrl: false,
      isEditingWhenExpression: false,
      isEven: false,
      isShift: true,
      key: 'B',
      keyMatches: [],
      rowIndex: 3,
      selected: true,
      when: 'Empty',
    },
    {
      command: 'test.command3',
      commandMatches: [],
      isCtrl: true,
      isEditingWhenExpression: false,
      isEven: true,
      isShift: true,
      key: 'C',
      keyMatches: [],
      rowIndex: 4,
      selected: false,
      when: 'Empty',
    },
  ])
})
