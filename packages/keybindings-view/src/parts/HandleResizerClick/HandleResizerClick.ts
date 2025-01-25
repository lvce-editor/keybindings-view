import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleResizerClick = (state: KeyBindingsState, id: number, x: number): KeyBindingsState => {
  return {
    ...state,
    resizerDownId: id,
  }
}
