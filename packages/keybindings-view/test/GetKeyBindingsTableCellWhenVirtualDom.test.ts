import { expect, test } from '@jest/globals'
import type { VisibleKeyBinding } from '../src/parts/VisibleKeyBinding/VisibleKeyBinding.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableCellWhenVirtualDom from '../src/parts/GetKeyBindingsTableCellWhenVirtualDom/GetKeyBindingsTableCellWhenVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableCellWhenDom - with when condition', () => {
  const keyBinding: VisibleKeyBinding = {
    when: 'editorFocus',
  } as any
  expect(GetKeyBindingsTableCellWhenVirtualDom.getKeyBindingsTableCellWhenDom(keyBinding)).toEqual([
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: 'editorFocus',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getKeyBindingsTableCellWhenDom - without when condition', () => {
  const keyBinding: VisibleKeyBinding = {
    when: '',
  } as any
  expect(GetKeyBindingsTableCellWhenVirtualDom.getKeyBindingsTableCellWhenDom(keyBinding)).toEqual([
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: '',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getKeyBindingsTableCellWhenDom - undefined when condition', () => {
  const keyBinding: VisibleKeyBinding = {
    when: undefined,
  } as any
  expect(GetKeyBindingsTableCellWhenVirtualDom.getKeyBindingsTableCellWhenDom(keyBinding)).toEqual([
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: 0,
      text: '',
      type: VirtualDomElements.Text,
    },
  ])
})
