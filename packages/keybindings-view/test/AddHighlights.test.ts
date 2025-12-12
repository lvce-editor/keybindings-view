import { expect, test } from '@jest/globals'
import * as AddHighlights from '../src/parts/AddHighlights/AddHighlights.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('addHighlights - no highlights', () => {
  expect(AddHighlights.addHighlights([], 'test')).toEqual([
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: 'test',
      type: VirtualDomElements.Text,
    },
  ])
})

test('addHighlights - single highlight', () => {
  expect(AddHighlights.addHighlights([1, 3], 'test')).toEqual([
    {
      childCount: 3,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: 't',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: ClassNames.SearchHighlight,
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: 'es',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 0,
      text: 't',
      type: VirtualDomElements.Text,
    },
  ])
})

test('addHighlights - multiple highlights', () => {
  expect(AddHighlights.addHighlights([0, 1, 3, 4], 'test')).toEqual([
    {
      childCount: 3,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 1,
      className: ClassNames.SearchHighlight,
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: 't',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 0,
      text: 'es',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: ClassNames.SearchHighlight,
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: 't',
      type: VirtualDomElements.Text,
    },
  ])
})

test('addHighlights - highlight at start', () => {
  expect(AddHighlights.addHighlights([0, 2], 'test')).toEqual([
    {
      childCount: 2,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 1,
      className: ClassNames.SearchHighlight,
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: 'te',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 0,
      text: 'st',
      type: VirtualDomElements.Text,
    },
  ])
})

test('addHighlights - highlight at end', () => {
  expect(AddHighlights.addHighlights([2, 4], 'test')).toEqual([
    {
      childCount: 2,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: 'te',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: ClassNames.SearchHighlight,
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: 'st',
      type: VirtualDomElements.Text,
    },
  ])
})
