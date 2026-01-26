import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getResizerVirtualDom } from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'

export const getResizersVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 4,
      className: ClassNames.Resizers,
      type: VirtualDomElements.Div,
    },
    ...getResizerVirtualDom(ClassNames.ResizerOne),
    ...getResizerVirtualDom(ClassNames.ResizerTwo),
  ]
}
