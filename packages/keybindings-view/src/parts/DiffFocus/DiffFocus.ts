import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderFocus

export const isEqual = (oldState: KeyBindingsState, newState: KeyBindingsState): boolean => {
  return oldState.isRecordingKeys === newState.isRecordingKeys
}
