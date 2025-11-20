import { ViewletCommand } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderFocusContext = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid } = newState
  return [ViewletCommand.FocusSelector, uid, InputName.KeyBindingsFilter]
}
