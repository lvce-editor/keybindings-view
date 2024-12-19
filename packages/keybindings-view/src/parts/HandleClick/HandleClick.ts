import * as Focus from '../Focus/Focus.ts'
import * as GetIndex from '../GetIndex/GetIndex.ts'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ShowDefineKeyBinding from '../ShowDefineKeyBinding/ShowDefineKeyBinding.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleClick = async (state: KeyBindingsState, eventX: number, eventY: number): Promise<KeyBindingsState> => {
  const { padding, editIconSize, x } = state
  const selectedIndex = GetIndex.getIndex(state, eventX, eventY)
  const relativeX = eventX - x
  if (relativeX > padding && relativeX < padding + editIconSize) {
    await ShowDefineKeyBinding.showDefineKeyBinding()
  } else {
    // TODO avoid side effect, make focus functional
    Focus.setFocus(WhenExpression.FocusKeyBindingsTable)
  }
  return {
    ...state,
    focusedIndex: selectedIndex,
    selectedIndex,
  }
}
