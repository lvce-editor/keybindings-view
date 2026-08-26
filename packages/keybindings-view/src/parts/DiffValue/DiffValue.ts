import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const isEqual = (oldState: KeyBindingsState, newState: KeyBindingsState): boolean => {
  return newState.inputSource === InputSource.User || oldState.value === newState.value
}
