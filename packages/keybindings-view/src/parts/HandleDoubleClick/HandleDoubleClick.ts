import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetIndex from '../GetIndex/GetIndex.ts'

export const handleDoubleClick = async (state: KeyBindingsState, eventX: number, eventY: number): Promise<KeyBindingsState> => {
  const selectedIndex = GetIndex.getIndex(state, eventX, eventY)
  // TODO wait promise?
  // showDefineWidget(state, selectedIndex)
  return {
    ...state,
    focusedIndex: selectedIndex,
    selectedIndex,
    defineKeyBindingsId: 1,
  }
}
