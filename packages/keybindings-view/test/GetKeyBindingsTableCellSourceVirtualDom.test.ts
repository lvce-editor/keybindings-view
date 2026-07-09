import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableCellSourceVirtualDom from '../src/parts/GetKeyBindingsTableCellSourceVirtualDom/GetKeyBindingsTableCellSourceVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableCellSourceDom', () => {
  expect(GetKeyBindingsTableCellSourceVirtualDom.getKeyBindingsTableCellSourceDom()).toEqual([
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: 'System',
      type: VirtualDomElements.Text,
    },
  ])
})
