import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as FocusKey from '../FocusKey/FocusKey.ts'

export const handleInputFocus = (state: KeyBindingsState): KeyBindingsState => {
  return {
    ...state,
    focus: FocusKey.Input,
  }
}
