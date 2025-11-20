import { expect, test } from '@jest/globals'
import { mergeClassNames } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetNoKeyBindingsFoundVirtualDom from '../src/parts/GetNoKeyBindingsFoundVirtualDom/GetNoKeyBindingsFoundVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getNoKeyBindingsFoundVirtualDom', () => {
  expect(GetNoKeyBindingsFoundVirtualDom.getNoKeyBindingsFoundVirtualDom()).toEqual([
    {
      type: VirtualDomElements.Div,
      className: mergeClassNames(ClassNames.Message, ClassNames.NoMatchingKeyBindingsFoundMessage),
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 'No matching Keybindings found',
    },
  ])
})
