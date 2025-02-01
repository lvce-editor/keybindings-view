import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getRecordingKeysBadgeVirtualDom = (): readonly VirtualDomNode[] => {
  const recordingKeys = KeyBindingStrings.recordingKeys()
  return [
    {
      type: VirtualDomElements.Div,
      className: 'InputBadge',
      childCount: 1,
    },
    text(recordingKeys),
  ]
}
