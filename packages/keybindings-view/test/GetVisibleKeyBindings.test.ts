import { expect, test } from '@jest/globals'
import * as GetVisibleKeyBindings from '../src/parts/GetVisibleKeyBindings/GetVisibleKeyBindings.ts'

test('getVisibleKeyBindings - empty array', () => {
  expect(GetVisibleKeyBindings.getVisibleKeyBindings([], 0, 0, -1)).toEqual([])
})

test('getVisibleKeyBindings - single item', () => {
  const keyBindings = [
    {
      isCtrl: false,
      isShift: false,
      key: 'A',
      when: 0,
      rawKey: 0,
      command: 'test.command',
      commandMatches: [],
      keyMatches: [],
    },
  ]
  expect(GetVisibleKeyBindings.getVisibleKeyBindings(keyBindings, 0, 1, -1)).toEqual([
    {
      rowIndex: 2,
      isCtrl: false,
      isShift: false,
      key: 'A',
      when: 'n/a',
      command: 'test.command',
      selected: false,
      commandMatches: [],
      keyMatches: [],
      isEven: true,
    },
  ])
})

test('getVisibleKeyBindings - multiple items', () => {
  const keyBindings = [
    {
      isCtrl: true,
      isShift: false,
      key: 'A',
      when: 8,
      rawKey: 0,
      command: 'test.command1',
      commandMatches: [],
      keyMatches: [],
    },
    {
      isCtrl: false,
      isShift: true,
      key: 'B',
      when: 25,
      rawKey: 0,
      command: 'test.command2',
      commandMatches: [],
      keyMatches: [],
    },
  ]
  expect(GetVisibleKeyBindings.getVisibleKeyBindings(keyBindings, 0, 2, 1)).toEqual([
    {
      rowIndex: 2,
      isCtrl: true,
      isShift: false,
      key: 'A',
      when: 'n/a',
      command: 'test.command1',
      selected: false,
      commandMatches: [],
      keyMatches: [],
      isEven: true,
    },
    {
      rowIndex: 3,
      isCtrl: false,
      isShift: true,
      key: 'B',
      when: 'n/a',
      command: 'test.command2',
      selected: true,
      commandMatches: [],
      keyMatches: [],
      isEven: false,
    },
  ])
})

test('getVisibleKeyBindings - with slice', () => {
  const keyBindings = [
    {
      isCtrl: true,
      isShift: false,
      key: 'A',
      when: 8,
      rawKey: 0,
      command: 'test.command1',
      commandMatches: [],
      keyMatches: [],
    },
    {
      isCtrl: false,
      isShift: true,
      key: 'B',
      when: 0,
      rawKey: 0,
      command: 'test.command2',
      commandMatches: [],
      keyMatches: [],
    },
    {
      isCtrl: true,
      isShift: true,
      key: 'C',
      when: 0,
      rawKey: 0,
      command: 'test.command3',
      commandMatches: [],
      keyMatches: [],
    },
  ]
  expect(GetVisibleKeyBindings.getVisibleKeyBindings(keyBindings, 1, 3, 1)).toEqual([
    {
      rowIndex: 3,
      isCtrl: false,
      isShift: true,
      key: 'B',
      when: 'n/a',
      command: 'test.command2',
      selected: true,
      commandMatches: [],
      keyMatches: [],
      isEven: false,
    },
    {
      rowIndex: 4,
      isCtrl: true,
      isShift: true,
      key: 'C',
      when: 'n/a',
      command: 'test.command3',
      selected: false,
      commandMatches: [],
      keyMatches: [],
      isEven: true,
    },
  ])
})
