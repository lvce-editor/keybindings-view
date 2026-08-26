import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getResizerVirtualDom } from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'

const resizersNode: VirtualDomNode = {
  childCount: 4,
  className: ClassNames.Resizers,
  type: VirtualDomElements.Div,
}

export const getResizersVirtualDom = (): readonly VirtualDomNode[] => {
  return [resizersNode, ...getResizerVirtualDom(ClassNames.ResizerOne), ...getResizerVirtualDom(ClassNames.ResizerTwo)]
}
