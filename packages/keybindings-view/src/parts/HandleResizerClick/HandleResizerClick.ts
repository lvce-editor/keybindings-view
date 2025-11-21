import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

const getResizerId = (name: string): number => {
  switch (name) {
    case 'ResizerOne':
      return 1
    case 'ResizerTwo':
      return 2
    default:
      return 0
  }
}

export const handleResizerClick = (state: KeyBindingsState, name: string, x: number): KeyBindingsState => {
  const resizerDownId = getResizerId(name)
  return {
    ...state,
    resizerDownId,
  }
}
