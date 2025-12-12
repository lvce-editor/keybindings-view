import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AddHighlights from '../AddHighlights/AddHighlights.ts'

export const getKeyBindingsTableCellCommandDom = (keyBinding: any): readonly VirtualDomNode[] => {
  const { command, commandMatches } = keyBinding
  const commandHighlights = commandMatches.slice(1)
  return AddHighlights.addHighlights(commandHighlights, command)
}
