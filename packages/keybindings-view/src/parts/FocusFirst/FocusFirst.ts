import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { focusIndex } from '../ListFocusIndex/ListFocusIndex.ts'

export const focusFirst = (state: KeyBindingsState): KeyBindingsState => {
  return focusIndex(state, 0)
}
