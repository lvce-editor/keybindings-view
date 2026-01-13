import { expect, test } from '@jest/globals'
import * as GetRecordingKeysBadgeVirtualDom from '../src/parts/GetRecordingKeysBadgeVirtualDom/GetRecordingKeysBadgeVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getRecordingKeysBadgeVirtualDom', () => {
  const isRecordingKeys = true
  expect(GetRecordingKeysBadgeVirtualDom.getRecordingKeysBadgeVirtualDom(isRecordingKeys)).toEqual([
    {
      childCount: 1,
      className: 'InputBadge',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      text: 'Recording keys',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getRecordingKeysBadgeVirtualDom - disabled', () => {
  const isRecordingKeys = false
  expect(GetRecordingKeysBadgeVirtualDom.getRecordingKeysBadgeVirtualDom(isRecordingKeys)).toEqual([])
})
