import { expect, test } from '@jest/globals'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

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
    {
      name: 'handleWheel',
      params: ['handleWheel', 'event.deltaMode', 'event.deltaY'],
      passive: true,
    },
    {
      name: DomEventListenerFunctions.HandleTableClick,
      params: ['handleClick', 'event.clientX', 'event.clientY'],
    },
    {
      name: DomEventListenerFunctions.HandleTableDoubleClick,
      params: ['handleDoubleClick', 'event.clientX', 'event.clientY'],
    },
    {
      name: DomEventListenerFunctions.HandleSearchActionClick,
      params: ['handleSearchActionClick', 'event.target.name'],
    },
    {
      name: DomEventListenerFunctions.HandleKeyDown,
      params: ['handleKeyDown', 'event.key'],
    },
  ])
})
