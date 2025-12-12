import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const tableHead: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.TableHead,
  type: VirtualDomElements.THead,
}

const tableHeadRow: VirtualDomNode = {
  ariaRowIndex: 1,
  childCount: 4,
  className: ClassNames.TableRow,
  type: VirtualDomElements.Tr,
}

const tableHeading: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.TableCell,
  type: VirtualDomElements.Th,
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
