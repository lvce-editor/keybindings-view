import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getNoKeyBindingsFoundVirtualDom = (): readonly VirtualDomNode[] => {
  const noKeyBindingsFound = KeyBindingStrings.noKeyBindingsFound()
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.Message,
      childCount: 1,
    },
    text(noKeyBindingsFound),
  ]
}
