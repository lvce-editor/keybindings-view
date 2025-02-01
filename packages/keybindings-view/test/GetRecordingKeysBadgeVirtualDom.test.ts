import { expect, test } from '@jest/globals'
import * as GetRecordingKeysBadgeVirtualDom from '../src/parts/GetRecordingKeysBadgeVirtualDom/GetRecordingKeysBadgeVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getRecordingKeysBadgeVirtualDom', () => {
  const isRecordingKeys = true
  expect(GetRecordingKeysBadgeVirtualDom.getRecordingKeysBadgeVirtualDom(isRecordingKeys)).toEqual([
    {
      type: VirtualDomElements.Div,
      className: 'InputBadge',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      childCount: 0,
      text: 'Recording keys',
    },
  ])
})

test('getRecordingKeysBadgeVirtualDom - disabled', () => {
  const isRecordingKeys = false
  expect(GetRecordingKeysBadgeVirtualDom.getRecordingKeysBadgeVirtualDom(isRecordingKeys)).toEqual([])
})
