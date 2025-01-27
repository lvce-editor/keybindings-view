import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableBodyVirtualDom from '../src/parts/GetKeyBindingsTableBodyVirtualDom/GetKeyBindingsTableBodyVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableBodyVirtualDom - empty keyBindings', () => {
  expect(GetKeyBindingsTableBodyVirtualDom.getKeyBindingsTableBodyDom([])).toEqual([
    {
      type: VirtualDomElements.TBody,
      className: ClassNames.KeyBindingsTableBody,
      childCount: 0,
    },
  ])
})
