import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenersFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as EventValue from '../EventValue/EventValue.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenersFunctions.HandleContextMenu,
      params: ['handleContextMenu'],
    },
    {
      name: DomEventListenersFunctions.HandleInput,
      params: ['handleInput', EventValue.Value],
    },
    {
      name: 'handleResizerPointerDown',
      params: ['handleResizerClick', EventValue.X],
    },
    {
      name: 'handleResizerMove',
      params: ['handleResizerMove', EventValue.Y],
    },
    {
      name: DomEventListenersFunctions.HandleContextMenu,
      params: ['handleContextMenu', EventValue.Button, EventValue.X, EventValue.Y],
      preventDefault: true,
    },
  ]
}
