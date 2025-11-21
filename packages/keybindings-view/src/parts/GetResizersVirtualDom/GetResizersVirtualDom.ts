import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getResizerVirtualDom } from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'

export const getResizersVirtualDom = (): readonly VirtualDomNode[] => {
  return [...getResizerVirtualDom(ClassNames.ResizerOne), ...getResizerVirtualDom(ClassNames.ResizerTwo)]
}
