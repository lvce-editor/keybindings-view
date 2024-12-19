import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: KeyBindingsState): SavedState => {
  const { value } = state
  return {
    value,
  }
}
