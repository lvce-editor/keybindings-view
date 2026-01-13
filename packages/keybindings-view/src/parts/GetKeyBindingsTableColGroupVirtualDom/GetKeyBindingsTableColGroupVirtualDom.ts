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
      childCount: 4,
      className: ClassNames.TableColGroup,
      type: VirtualDomElements.ColGroup,
    },
    {
      childCount: 0,
      className: mergeClassNames(ClassNames.TableCol, ClassNames.TableColZero),
      type: VirtualDomElements.Col,
    },
    {
      childCount: 0,
      className: mergeClassNames(ClassNames.TableCol, ClassNames.TableColOne),
      type: VirtualDomElements.Col,
    },
    {
      childCount: 0,
      className: mergeClassNames(ClassNames.TableCol, ClassNames.TableColTwo),
      type: VirtualDomElements.Col,
    },
    {
      childCount: 0,
      className: mergeClassNames(ClassNames.TableCol, ClassNames.TableColThree),
      type: VirtualDomElements.Col,
    },
  ]
  return tableDom
}
