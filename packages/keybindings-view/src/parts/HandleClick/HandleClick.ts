import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as FocusKey from '../FocusKey/FocusKey.ts'
import * as GetIndex from '../GetIndex/GetIndex.ts'
import * as ShowDefineKeyBinding from '../ShowDefineKeyBinding/ShowDefineKeyBinding.ts'

export const handleClick = async (state: KeyBindingsState, eventX: number, eventY: number): Promise<KeyBindingsState> => {
  const { padding, editIconSize, x } = state
  const selectedIndex = GetIndex.getIndex(state, eventX, eventY)
  const relativeX = eventX - x
  if (relativeX > padding && relativeX < padding + editIconSize) {
    await ShowDefineKeyBinding.showDefineKeyBinding()
  }
  return {
    ...state,
    focusedIndex: selectedIndex,
    selectedIndex,
    focus: FocusKey.Table,
  }
}
