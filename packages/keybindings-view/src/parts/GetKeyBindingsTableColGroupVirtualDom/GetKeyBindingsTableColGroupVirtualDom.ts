import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'

export const getKeyBindingsTableColGroupVirtualDom = (
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
): readonly VirtualDomNode[] => {
  const tableDom = [
    {
      type: VirtualDomElements.ColGroup,
      className: ClassNames.KeyBindingsTableColGroup,
      childCount: 4,
    },
    {
      type: VirtualDomElements.Col,
      className: ClassNames.KeyBindingsTableCol,
      width: 30,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: ClassNames.KeyBindingsTableCol,
      width: columnWidth1,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: ClassNames.KeyBindingsTableCol,
      width: columnWidth2,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: ClassNames.KeyBindingsTableCol,
      width: columnWidth3 - 30,
      childCount: 0,
    },
  ]
  return tableDom
}
