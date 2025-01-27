import { expect, test } from '@jest/globals'
import * as AddHighlights from '../src/parts/AddHighlights/AddHighlights.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('addHighlights - no highlights', () => {
  expect(AddHighlights.addHighlights([], 'test')).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 'test',
    },
  ])
})

test('addHighlights - single highlight', () => {
  expect(AddHighlights.addHighlights([1, 3], 'test')).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 3,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 't',
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.SearchHighlight,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 'es',
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 't',
    },
  ])
})

test('addHighlights - multiple highlights', () => {
  expect(AddHighlights.addHighlights([0, 1, 3, 4], 'test')).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 4,
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.SearchHighlight,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 't',
    },
    {
      type: VirtualDomElements.Text,
      text: 'es',
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.SearchHighlight,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 't',
    },
  ])
})

test('addHighlights - highlight at start', () => {
  expect(AddHighlights.addHighlights([0, 2], 'test')).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.SearchHighlight,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 'te',
    },
    {
      type: VirtualDomElements.Text,
      text: 'st',
    },
  ])
})

test('addHighlights - highlight at end', () => {
  expect(AddHighlights.addHighlights([2, 4], 'test')).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.KeyBindingsTableCell,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Text,
      text: 'te',
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.SearchHighlight,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 'st',
    },
  ])
})
