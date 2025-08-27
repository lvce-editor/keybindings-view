import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { focusIndex } from '../ListFocusIndex/ListFocusIndex.ts'

export const focusPrevious = (state: KeyBindingsState): KeyBindingsState => {
  const { selectedIndex } = state
  const previousIndex = Math.max(selectedIndex - 1, 0)
  return focusIndex(state, previousIndex)
}
