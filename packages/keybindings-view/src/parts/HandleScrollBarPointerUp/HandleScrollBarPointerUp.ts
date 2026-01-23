import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleScrollBarPointerUp = (state: KeyBindingsState): KeyBindingsState => {
  return {
    ...state,
    scrollBarPointerDown: false,
  }
}