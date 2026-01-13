import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetIndex from '../GetIndex/GetIndex.ts'
import * as HandleClickIndex from '../HandleClickIndex/HandleClickIndex.ts'

export const handleClick = async (state: KeyBindingsState, eventX: number, eventY: number): Promise<KeyBindingsState> => {
  const { editIconSize, padding, x } = state
  const index = GetIndex.getIndex(state, eventX, eventY)
  const relativeX = eventX - x
  const showDefine = relativeX > padding && relativeX < padding + editIconSize
  return HandleClickIndex.handleClickIndex(state, index, showDefine)
}
