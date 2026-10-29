import { expect, test } from '@jest/globals'
import { getCss } from '../src/parts/GetCss/GetCss.ts'

test('getCss - shares the final column width between When and Source', () => {
  const css = getCss(30, 100, 200, 300, 150, 130, 330, 480, 24, 20, 10, 50)

  expect(css).toContain(`.KeyBindings .TableColFour {
  width: var(--TableColumnFourWidth);
}`)
  expect(css).toContain('--TableColumnThreeWidth: 150px;')
  expect(css).toContain('--TableColumnFourWidth: 150px;')
  expect(css).toContain('--ResizerThreeLeft: 480px;')
})

test('getCss - lets the empty-state message size itself to its content', () => {
  const css = getCss(30, 100, 200, 300, 150, 130, 330, 480, 24, 20, 10, 50)

  expect(css).toContain(`.KeyBindings .NoMatchingKeyBindingsFoundMessage {
  contain: content;
}`)
})
