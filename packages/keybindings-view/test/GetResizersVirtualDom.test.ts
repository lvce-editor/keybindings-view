import { expect, test } from '@jest/globals'
import { getResizersVirtualDom } from '../src/parts/GetResizersVirtualDom/GetResizersVirtualDom.ts'

test('getResizersVirtualDom - includes all three column boundaries', () => {
  const virtualDom = getResizersVirtualDom()
  const resizers = virtualDom.filter((node) => node.name)

  expect(resizers.map((node) => node.name)).toEqual(['ResizerOne', 'ResizerTwo', 'ResizerThree'])
  expect(virtualDom[0].childCount).toBe(3)
})
