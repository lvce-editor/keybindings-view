import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as KeyBindingStrings from '../KeyBindingStrings/KeyBindingStrings.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.InputBadge,
  childCount: 1,
}

export const getRecordingKeysBadgeVirtualDom = (isRecordingKeys: boolean): readonly VirtualDomNode[] => {
  if (!isRecordingKeys) {
    return []
  }
  const recordingKeys = KeyBindingStrings.recordingKeys()
  return [parentNode, text(recordingKeys)]
}
