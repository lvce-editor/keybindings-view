import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const noKeyBindingsFoundNode: VirtualDomNode = {
  childCount: 1,
  className: mergeClassNames(ClassNames.Message, ClassNames.NoMatchingKeyBindingsFoundMessage),
  type: VirtualDomElements.Div,
}

export const getNoKeyBindingsFoundVirtualDom = (): readonly VirtualDomNode[] => {
  const noKeyBindingsFound = KeyBindingStrings.noKeyBindingsFound()
  return [noKeyBindingsFoundNode, text(noKeyBindingsFound)]
}
