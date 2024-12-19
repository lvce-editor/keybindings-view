import { expect, test } from '@jest/globals'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as GetIconVirtualDom from '../src/parts/GetIconVirtualDom/GetIconVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getIconVirtualDom - with default type', () => {
  expect(GetIconVirtualDom.getIconVirtualDom('Edit')).toEqual({
    type: VirtualDomElements.Div,
    className: 'MaskIcon MaskIconEdit',
    role: AriaRoles.None,
    childCount: 0,
  })
})

test('getIconVirtualDom - with custom type', () => {
  expect(GetIconVirtualDom.getIconVirtualDom('Edit', VirtualDomElements.Span)).toEqual({
    type: VirtualDomElements.Span,
    className: 'MaskIcon MaskIconEdit',
    role: AriaRoles.None,
    childCount: 0,
  })
})
