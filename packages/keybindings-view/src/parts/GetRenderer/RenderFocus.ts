import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderFocus = (oldState: KeyBindingsState, newState: KeyBindingsState): any => {
  return ['Viewlet.focusSelector', newState.uid, InputName.KeyBindingsFilter]
}
