import { ViewletCommand } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderValue = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid, value } = newState
  return [ViewletCommand.SetValueByName, uid, InputName.KeyBindingsFilter, value]
}
