import { expect, test } from '@jest/globals'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import * as GetIconVirtualDom from '../src/parts/GetIconVirtualDom/GetIconVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getIconVirtualDom - with default type', () => {
  expect(GetIconVirtualDom.getIconVirtualDom('MaskIconEdit')).toEqual({
    childCount: 0,
    className: 'MaskIcon MaskIconEdit',
    role: AriaRoles.None,
    type: VirtualDomElements.Div,
  })
})

test('getIconVirtualDom - with custom type', () => {
  expect(GetIconVirtualDom.getIconVirtualDom('MaskIconEdit', VirtualDomElements.Span)).toEqual({
    childCount: 0,
    className: 'MaskIcon MaskIconEdit',
    role: AriaRoles.None,
    type: VirtualDomElements.Span,
  })
})
