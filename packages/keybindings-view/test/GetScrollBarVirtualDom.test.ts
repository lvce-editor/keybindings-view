import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetScrollBarVirtualDom from '../src/parts/GetScrollBarVirtualDom/GetScrollBarVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getScrollBarVirtualDom', () => {
  const scrollBarThumbHeight = 100
  const scrollBarThumbTop = 50

  expect(GetScrollBarVirtualDom.getScrollBarVirtualDom(scrollBarThumbHeight, scrollBarThumbTop)).toEqual([
    {
      childCount: 1,
      className: ClassNames.ScrollBar,
      interDown: DomEventListenerFunctions.HandleScrollBarPointerDown,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.ScrollBarThumb,
      type: VirtualDomElements.Div,
    },
  ])
})

test('getScrollBarVirtualDom - zero values', () => {
  expect(GetScrollBarVirtualDom.getScrollBarVirtualDom(0, 0)).toEqual([
    {
      childCount: 1,
      className: ClassNames.ScrollBar,
      interDown: DomEventListenerFunctions.HandleScrollBarPointerDown,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.ScrollBarThumb,
      type: VirtualDomElements.Div,
    },
  ])
})
