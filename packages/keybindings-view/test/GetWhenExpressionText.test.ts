import { expect, test } from '@jest/globals'
import * as GetWhenExpressionText from '../src/parts/GetWhenExpressionText/GetWhenExpressionText.ts'

test('getWhenExpressionText - Empty', () => {
  expect(GetWhenExpressionText.getWhenExpressionText(0)).toBe('Empty')
})

test('getWhenExpressionText - BrowserChromium', () => {
  expect(GetWhenExpressionText.getWhenExpressionText(1)).toBe('BrowserChromium')
})

test('getWhenExpressionText - FocusEditor', () => {
  expect(GetWhenExpressionText.getWhenExpressionText(8)).toBe('FocusEditor')
})

test('getWhenExpressionText - FocusSourceActions', () => {
  expect(GetWhenExpressionText.getWhenExpressionText(38)).toBe('FocusSourceActions')
})

test('getWhenExpressionText - invalid index', () => {
  expect(GetWhenExpressionText.getWhenExpressionText(999)).toBe('n/a')
})

test('getWhenExpressionText - negative index', () => {
  expect(GetWhenExpressionText.getWhenExpressionText(-1)).toBe('n/a')
})
