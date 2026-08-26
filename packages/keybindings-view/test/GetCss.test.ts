import { expect, test } from '@jest/globals'
import { getCss } from '../src/parts/GetCss/GetCss.ts'

test('getCss - shares the final column width between When and Source', () => {
  const css = getCss(30, 100, 200, 300, 130, 330, 24, 20, 10, 50)

  expect(css).toContain(`.KeyBindings .TableColThree,
.KeyBindings .TableColFour {
  width: calc(var(--TableColumnThreeWidth) / 2);
}`)
})

test('getCss - lets the empty-state message size itself to its content', () => {
  const css = getCss(30, 100, 200, 300, 130, 330, 24, 20, 10, 50)

  expect(css).toContain(`.KeyBindings .NoMatchingKeyBindingsFoundMessage {
  contain: content;
}`)
})
