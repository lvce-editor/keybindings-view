import * as GetIndex from '../GetIndex/GetIndex.ts'
import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleClick = (state: KeyBindingsState, eventX: number, eventY: number): KeyBindingsState => {
  const { padding, editIconSize, x } = state
  const selectedIndex = GetIndex.getIndex(state, eventX, eventY)
  const relativeX = eventX - x
  if (relativeX > padding && relativeX < padding + editIconSize) {
    // TODO
    // showDefineWidget(state, selectedIndex)
  } else {
    // TODO avoid side effect, make focus functional
    // Focus.setFocus(WhenExpression.FocusKeyBindingsTable)
  }
  return {
    ...state,
    focusedIndex: selectedIndex,
    selectedIndex,
  }
}
