import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetIndex from '../GetIndex/GetIndex.ts'
import * as HandleClickIndex from '../HandleClickIndex/HandleClickIndex.ts'

export const handleDoubleClick = async (state: KeyBindingsState, eventX: number, eventY: number): Promise<KeyBindingsState> => {
  const selectedIndex = GetIndex.getIndex(state, eventX, eventY)
  return HandleClickIndex.handleClickIndex(state, selectedIndex, true)
}
