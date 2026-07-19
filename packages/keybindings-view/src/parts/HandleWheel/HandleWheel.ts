import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'

export const handleWheel = (state: KeyBindingsState, deltaMode: number, deltaY: number): KeyBindingsState => {
  const { deltaY: currentDeltaY } = state
  return SetDeltaY.setDeltaY(state, currentDeltaY + deltaY)
}
