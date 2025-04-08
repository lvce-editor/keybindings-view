import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getRecordingKeysBadgeVirtualDom = (isRecordingKeys: boolean): readonly VirtualDomNode[] => {
  if (!isRecordingKeys) {
    return []
  }
  const recordingKeys = KeyBindingStrings.recordingKeys()
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.InputBadge,
      childCount: 1,
    },
    text(recordingKeys),
  ]
}
