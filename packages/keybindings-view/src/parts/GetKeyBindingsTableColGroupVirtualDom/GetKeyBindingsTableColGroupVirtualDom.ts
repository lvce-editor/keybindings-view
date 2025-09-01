import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getKeyBindingsTableColGroupVirtualDom = (
  columnWidth1: number,
  columnWidth2: number,
  columnWidth3: number,
): readonly VirtualDomNode[] => {
  const tableDom = [
    {
      type: VirtualDomElements.ColGroup,
      className: ClassNames.TableColGroup,
      childCount: 4,
    },
    {
      type: VirtualDomElements.Col,
      className: ClassNames.TableCol,
      width: 30,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: ClassNames.TableCol,
      width: columnWidth1,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: ClassNames.TableCol,
      width: columnWidth2,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: ClassNames.TableCol,
      width: columnWidth3 - 30,
      childCount: 0,
    },
  ]
  return tableDom
}
