import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderFocusContext = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid } = newState
  return ['Viewlet.focusSelector', uid, InputName.KeyBindingsFilter]
}
