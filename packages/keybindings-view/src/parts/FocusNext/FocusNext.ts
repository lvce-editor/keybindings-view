import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { focusIndex } from '../ListFocusIndex/ListFocusIndex.ts'

export const focusNext = (state: KeyBindingsState): KeyBindingsState => {
  const { selectedIndex, items } = state
  const nextIndex = Math.min(selectedIndex + 1, items.length - 1)
  return focusIndex(state, nextIndex)
}
