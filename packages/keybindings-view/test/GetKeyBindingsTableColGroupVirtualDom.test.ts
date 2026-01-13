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
      childCount: 4,
      className: ClassNames.TableColGroup,
      type: VirtualDomElements.ColGroup,
    },
    {
      childCount: 0,
      className: 'TableCol TableColZero',
      type: VirtualDomElements.Col,
    },
    {
      childCount: 0,
      className: 'TableCol TableColOne',
      type: VirtualDomElements.Col,
    },
    {
      childCount: 0,
      className: 'TableCol TableColTwo',
      type: VirtualDomElements.Col,
    },
    {
      childCount: 0,
      className: 'TableCol TableColThree',
      type: VirtualDomElements.Col,
    },
  ])
})

test('getKeyBindingsTableColGroupVirtualDom - zero widths', () => {
  expect(GetKeyBindingsTableColGroupVirtualDom.getKeyBindingsTableColGroupVirtualDom(0, 0, 0)).toEqual([
    {
      childCount: 4,
      className: ClassNames.TableColGroup,
      type: VirtualDomElements.ColGroup,
    },
    {
      childCount: 0,
      className: 'TableCol TableColZero',
      type: VirtualDomElements.Col,
    },
    {
      childCount: 0,
      className: 'TableCol TableColOne',
      type: VirtualDomElements.Col,
    },
    {
      childCount: 0,
      className: 'TableCol TableColTwo',
      type: VirtualDomElements.Col,
    },
    {
      childCount: 0,
      className: 'TableCol TableColThree',
      type: VirtualDomElements.Col,
    },
  ])
})
