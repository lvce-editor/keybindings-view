import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const highlight: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: ClassNames.SearchHighlight,
  childCount: 1,
}

// TODO move this to viewmodel
// TODO avoid mutation
export const addHighlights = (highlights: readonly number[], label: string): readonly VirtualDomNode[] => {
  const dom: VirtualDomNode[] = []
  let position = 0
  let childCount = 0
  for (let i = 0; i < highlights.length; i += 2) {
    const highlightStart = highlights[i]
    const highlightEnd = highlights[i + 1]
    if (position < highlightStart) {
      const beforeText = label.slice(position, highlightStart)
      childCount++
      dom.push(text(beforeText))
    }
    const highlightText = label.slice(highlightStart, highlightEnd)
    childCount++
    dom.push(highlight, text(highlightText))
    position = highlightEnd
  }
  if (position < label.length) {
    const afterText = label.slice(position)
    childCount++
    dom.push(text(afterText))
  }
  dom.unshift({ type: VirtualDomElements.Td, className: ClassNames.TableCell, childCount })
  return dom
}
