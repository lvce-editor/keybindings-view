import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleResizerPointerUp = (state: KeyBindingsState, id: number, x: number): KeyBindingsState => {
  return {
    ...state,
    resizerDownId: 0,
  }
}
