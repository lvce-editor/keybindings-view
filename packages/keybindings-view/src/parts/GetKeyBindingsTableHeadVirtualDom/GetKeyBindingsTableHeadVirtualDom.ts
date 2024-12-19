import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const tableHead = {
  type: VirtualDomElements.THead,
  className: ClassNames.KeyBindingsTableHead,
  childCount: 1,
}

const tableHeadRow = {
  type: VirtualDomElements.Tr,
  className: ClassNames.KeyBindingsTableRow,
  ariaRowIndex: 1,
  childCount: 4,
}

const tableHeading = {
  type: VirtualDomElements.Th,
  className: ClassNames.KeyBindingsTableCell,
  childCount: 1,
}

const staticTableHeadDom: readonly VirtualDomNode[] = [
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

export const getKeyBindingsTableHeadVirtualDom = (): readonly VirtualDomNode[] => {
  return staticTableHeadDom
}
