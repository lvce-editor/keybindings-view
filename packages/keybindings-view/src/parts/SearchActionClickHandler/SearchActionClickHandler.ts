import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export interface SearchActionClickHandler {
  (state: KeyBindingsState): KeyBindingsState | Promise<KeyBindingsState>
}
