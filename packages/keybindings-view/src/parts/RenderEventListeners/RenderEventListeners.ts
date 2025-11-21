import { EventExpression } from '@lvce-editor/constants'
import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleTableContextMenu,
      params: ['handleContextMenu', EventExpression.Button, EventExpression.ClientX, EventExpression.ClientY],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleInput,
      params: ['handleInput', EventExpression.TargetValue],
    },
    {
      name: DomEventListenerFunctions.HandleInputFocus,
      params: ['handleInputFocus'],
    },
    {
      name: DomEventListenerFunctions.HandleWhenExpressionInputBlur,
      params: ['handleWhenExpressionInputBlur'],
    },
    {
      name: DomEventListenerFunctions.HandleResizerPointerDown,
      params: ['handleResizerClick', EventExpression.ClientX],
      trackPointerEvents: [DomEventListenerFunctions.HandleResizerMove, DomEventListenerFunctions.HandleResizerPointerUp],
    },
    {
      name: DomEventListenerFunctions.HandleResizerMove,
      params: ['handleResizerMove', EventExpression.ClientX],
    },
    {
      name: DomEventListenerFunctions.HandleTableContextMenu,
      params: ['handleContextMenu', EventExpression.Button, EventExpression.ClientX, EventExpression.ClientY],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleWheel,
      params: ['handleWheel', EventExpression.DeltaMode, EventExpression.DeltaY],
      passive: true,
    },
    {
      name: DomEventListenerFunctions.HandleTableClick,
      params: ['handleClick', EventExpression.ClientX, EventExpression.ClientY],
    },
    {
      name: DomEventListenerFunctions.HandleTableDoubleClick,
      params: ['handleDoubleClick', EventExpression.ClientX, EventExpression.ClientY],
    },
    {
      name: DomEventListenerFunctions.HandleSearchActionClick,
      params: ['handleSearchActionClick', EventExpression.TargetName],
    },
    {
      name: DomEventListenerFunctions.HandleKeyDown,
      params: ['handleKeyDown', EventExpression.AltKey, EventExpression.CtrlKey, EventExpression.Key],
    },
    {
      name: DomEventListenerFunctions.HandleSearchHeaderContextMenu,
      params: ['handleSearchHeaderContextMenu'],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleTableFocus,
      params: ['handleTableFocus'],
    },
  ]
}
