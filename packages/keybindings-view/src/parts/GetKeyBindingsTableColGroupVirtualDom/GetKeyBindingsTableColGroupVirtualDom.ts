import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
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
      className: mergeClassNames(ClassNames.TableCol, ClassNames.TableColZero),
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: mergeClassNames(ClassNames.TableCol, ClassNames.TableColOne),
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: mergeClassNames(ClassNames.TableCol, ClassNames.TableColTwo),
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      className: mergeClassNames(ClassNames.TableCol, ClassNames.TableColThree),
      childCount: 0,
    },
  ]
  return tableDom
}
