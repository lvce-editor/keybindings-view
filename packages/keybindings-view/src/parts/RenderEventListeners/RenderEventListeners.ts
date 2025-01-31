import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleContextMenu,
      params: ['handleContextMenu'],
    },
    {
      name: DomEventListenerFunctions.HandleInput,
      params: ['handleInput', 'event.target.value'],
    },
    {
      name: DomEventListenerFunctions.HandleResizerPointerDown,
      params: ['handleResizerClick', 'event.clientX'],
    },
    {
      name: DomEventListenerFunctions.HandleResizerMove,
      params: ['handleResizerMove', 'event.clientY'],
    },
    {
      name: DomEventListenerFunctions.HandleContextMenu,
      params: ['handleContextMenu', 'event.button', 'event.clientX', 'event.clientY'],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleWheel,
      params: ['handleWheel', 'event.deltaMode', 'event.deltaY'],
      passive: true,
    },
    {
      name: DomEventListenerFunctions.HandleTableClick,
      params: ['handleClick', 'event.clientX', 'event.clientY'],
    },
    {
      name: DomEventListenerFunctions.HandleTableDoubleClick,
      params: ['handleClick', 'event.clientX', 'event.clientY'],
    },
    {
      name: DomEventListenerFunctions.HandleSearchActionClick,
      params: ['handleSearchActionClick', 'event.target.name'],
    },
  ]
}
