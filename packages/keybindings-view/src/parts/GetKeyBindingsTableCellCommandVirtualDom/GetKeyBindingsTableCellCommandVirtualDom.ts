import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const highlight = {
  type: VirtualDomElements.Span,
  className: ClassNames.SearchHighlight,
  childCount: 1,
}

const addHighlights = (tableCell: any, dom: any, highlights: any, label: any): void => {
  dom.push(tableCell)
  let position = 0
  for (let i = 0; i < highlights.length; i += 2) {
    const highlightStart = highlights[i]
    const highlightEnd = highlights[i + 1]
    if (position < highlightStart) {
      const beforeText = label.slice(position, highlightStart)
      tableCell.childCount++
      dom.push(text(beforeText))
    }
    const highlightText = label.slice(highlightStart, highlightEnd)
    tableCell.childCount++
    dom.push(highlight, text(highlightText))
    position = highlightEnd
  }
  if (position < label.length) {
    const afterText = label.slice(position)
    tableCell.childCount++
    dom.push(text(afterText))
  }
}

export const getKeyBindingsTableCellCommandDom = (keyBinding: any): readonly VirtualDomNode[] => {
  const { commandMatches, command } = keyBinding
  const commandHighlights = commandMatches.slice(1)
  const dom: VirtualDomNode[] = []
  const tableCell = {
    type: VirtualDomElements.Td,
    className: ClassNames.KeyBindingsTableCell,
    childCount: 0,
  }
  addHighlights(tableCell, dom, commandHighlights, command)
  dom.push()
  return dom
}
