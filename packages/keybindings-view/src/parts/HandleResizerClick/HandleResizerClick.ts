import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleResizerClick = (state: KeyBindingsState, name: string, x: number): KeyBindingsState => {
  console.log({ x })
  return {
    ...state,
    resizerDownId: 1,
  }
}
