import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../src/parts/GetIconVirtualDom/GetIconVirtualDom.ts'
import * as GetKeyBindingsTableCellEditVirtualDom from '../src/parts/GetKeyBindingsTableCellEditVirtualDom/GetKeyBindingsTableCellEditVirtualDom.ts'
import * as Icon from '../src/parts/Icon/Icon.ts'
import * as MergeClassNames from '../src/parts/MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableEditCellDom', () => {
  expect(GetKeyBindingsTableCellEditVirtualDom.getKeyBindingsTableEditCellDom()).toEqual([
    {
      type: VirtualDomElements.Td,
      childCount: 1,
      className: ClassNames.TableCell,
    },
    {
      type: VirtualDomElements.Button,
      className: MergeClassNames.mergeClassNames(ClassNames.IconButton, ClassNames.KeyBindingsEditButton),
      childCount: 1,
    },
    GetIconVirtualDom.getIconVirtualDom(Icon.Edit),
  ])
})
