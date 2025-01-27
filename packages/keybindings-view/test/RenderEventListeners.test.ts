import { expect, test } from '@jest/globals'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'

test('renderEventListeners', () => {
  expect(RenderEventListeners.renderEventListeners()).toEqual([
    {
      name: DomEventListenerFunctions.HandleContextMenu,
      params: ['handleContextMenu'],
    },
    {
      name: DomEventListenerFunctions.HandleInput,
      params: ['handleInput', 'event.target.value'],
    },
    {
      name: 'handleResizerPointerDown',
      params: ['handleResizerClick', 'event.clientX'],
    },
    {
      name: 'handleResizerMove',
      params: ['handleResizerMove', 'event.clientY'],
    },
    {
      name: DomEventListenerFunctions.HandleContextMenu,
      params: ['handleContextMenu', 'event.button', 'event.clientX', 'event.clientY'],
      preventDefault: true,
    },
  ])
})
