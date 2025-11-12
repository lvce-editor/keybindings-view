import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyBindingsTableColGroupVirtualDom from '../src/parts/GetKeyBindingsTableColGroupVirtualDom/GetKeyBindingsTableColGroupVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getKeyBindingsTableColGroupVirtualDom', () => {
  const columnWidth1 = 100
  const columnWidth2 = 200
  const columnWidth3 = 300

  expect(GetKeyBindingsTableColGroupVirtualDom.getKeyBindingsTableColGroupVirtualDom(columnWidth1, columnWidth2, columnWidth3)).toEqual([
    {
      type: VirtualDomElements.ColGroup,
      className: ClassNames.TableColGroup,
      childCount: 4,
    },
    {
      type: VirtualDomElements.Col,
      className: 'TableCol TableColZero',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: 'TableCol TableColOne',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: 'TableCol TableColTwo',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: 'TableCol TableColThree',
      childCount: 0,
    },
  ])
})

test('getKeyBindingsTableColGroupVirtualDom - zero widths', () => {
  expect(GetKeyBindingsTableColGroupVirtualDom.getKeyBindingsTableColGroupVirtualDom(0, 0, 0)).toEqual([
    {
      type: VirtualDomElements.ColGroup,
      className: ClassNames.TableColGroup,
      childCount: 4,
    },
    {
      type: VirtualDomElements.Col,
      className: 'TableCol TableColZero',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: 'TableCol TableColOne',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: 'TableCol TableColTwo',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: 'TableCol TableColThree',
      childCount: 0,
    },
  ])
})
