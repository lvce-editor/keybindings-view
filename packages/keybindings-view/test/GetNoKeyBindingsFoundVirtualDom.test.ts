import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetNoKeyBindingsFoundVirtualDom from '../src/parts/GetNoKeyBindingsFoundVirtualDom/GetNoKeyBindingsFoundVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getNoKeyBindingsFoundVirtualDom', () => {
  expect(GetNoKeyBindingsFoundVirtualDom.getNoKeyBindingsFoundVirtualDom()).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.Message,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 'No matching Keybindings found',
    },
  ])
})
