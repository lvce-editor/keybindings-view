import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { focusIndex } from '../ListFocusIndex/ListFocusIndex.ts'

export const focusLast = (state: KeyBindingsState): KeyBindingsState => {
  const { items } = state
  const last = items.length - 1
  return focusIndex(state, last)
}
