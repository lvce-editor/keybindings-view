import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const tableHead: VirtualDomNode = {
  type: VirtualDomElements.THead,
  className: ClassNames.TableHead,
  childCount: 1,
}

const tableHeadRow: VirtualDomNode = {
  type: VirtualDomElements.Tr,
  className: ClassNames.TableRow,
  ariaRowIndex: 1,
  childCount: 4,
}

const tableHeading: VirtualDomNode = {
  type: VirtualDomElements.Th,
  className: ClassNames.TableCell,
  childCount: 1,
}

export const getKeyBindingsTableHeadVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    tableHead,
    tableHeadRow,
    tableHeading,
    text(''),
    tableHeading,
    text(KeyBindingStrings.command()),
    tableHeading,
    text(KeyBindingStrings.key()),
    tableHeading,
    text(KeyBindingStrings.when()),
  ]
}
