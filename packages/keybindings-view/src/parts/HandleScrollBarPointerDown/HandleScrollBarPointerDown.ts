import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleScrollBarPointerDown = (state: KeyBindingsState, clientX: number, clientY: number): KeyBindingsState => {
  return {
    ...state,
    scrollBarPointerDown: true,
  }
}
