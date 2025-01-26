import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AddHighlights from '../AddHighlights/AddHighlights.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getKeyBindingsTableCellCommandDom = (keyBinding: any): readonly VirtualDomNode[] => {
  const { commandMatches, command } = keyBinding
  const commandHighlights = commandMatches.slice(1)
  const dom: VirtualDomNode[] = []
  const tableCell = {
    type: VirtualDomElements.Td,
    className: ClassNames.KeyBindingsTableCell,
    childCount: 0,
  }
  AddHighlights.addHighlights(tableCell, dom, commandHighlights, command)
  return dom
}
