import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export interface Renderer {
  (oldState: KeyBindingsState, newState: KeyBindingsState): any
}


