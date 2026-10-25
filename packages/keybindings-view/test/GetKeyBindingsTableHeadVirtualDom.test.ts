import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableHeadVirtualDom from '../src/parts/GetKeyBindingsTableHeadVirtualDom/GetKeyBindingsTableHeadVirtualDom.ts'
import * as KeyBindingStrings from '../src/parts/KeyBindingStrings/KeyBindingStrings.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableHeadVirtualDom', () => {
  expect(GetKeyBindingsTableHeadVirtualDom.getKeyBindingsTableHeadVirtualDom()).toEqual([
    {
      childCount: 1,
      className: ClassNames.TableHead,
      type: VirtualDomElements.THead,
    },
    {
      ariaRowIndex: 1,
      childCount: 5,
      className: ClassNames.TableRow,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Th,
    },
    {
      childCount: 0,
      text: '',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Th,
    },
    {
      childCount: 0,
      text: KeyBindingStrings.command(),
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Th,
    },
    {
      childCount: 0,
      text: KeyBindingStrings.key(),
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Th,
    },
    {
      childCount: 0,
      text: KeyBindingStrings.when(),
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Th,
    },
    {
      childCount: 0,
      text: KeyBindingStrings.source(),
      type: VirtualDomElements.Text,
    },
  ])
})
