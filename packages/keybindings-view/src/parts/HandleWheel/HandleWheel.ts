import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'

export const handleWheel = (state: KeyBindingsState, deltaMode: number, deltaY: number): KeyBindingsState => {
  return SetDeltaY.setDeltaY(state, state.deltaY + deltaY)
}
