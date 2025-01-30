import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableCellWhenVirtualDom from '../src/parts/GetKeyBindingsTableCellWhenVirtualDom/GetKeyBindingsTableCellWhenVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableCellWhenDom - with when condition', () => {
  const keyBinding = {
    when: 'editorFocus',
  } as any
  expect(GetKeyBindingsTableCellWhenVirtualDom.getKeyBindingsTableCellWhenDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.TableCell,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 'editorFocus',
    },
  ])
})

test('getKeyBindingsTableCellWhenDom - without when condition', () => {
  const keyBinding = {
    when: '',
  } as any
  expect(GetKeyBindingsTableCellWhenVirtualDom.getKeyBindingsTableCellWhenDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.TableCell,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: '',
    },
  ])
})

test('getKeyBindingsTableCellWhenDom - undefined when condition', () => {
  const keyBinding = {
    when: undefined,
  } as any
  expect(GetKeyBindingsTableCellWhenVirtualDom.getKeyBindingsTableCellWhenDom(keyBinding)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: ClassNames.TableCell,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: '',
    },
  ])
})
