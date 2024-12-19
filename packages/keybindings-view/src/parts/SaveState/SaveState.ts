import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: KeyBindingsState): SavedState => {
  const { value } = state
  return {
    value,
  }
}
