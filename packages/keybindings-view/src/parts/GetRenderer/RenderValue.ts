import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderValue = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid, value } = newState
  return ['Viewlet.setValueByName', uid, InputName.KeyBindingsFilter, /* setValue */ value]
}
