import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

export interface WrappedFn {
  (uid: number, ...args: readonly any[]): Promise<void>
}

interface Fn {
  (state: KeyBindingsState, ...args: readonly any[]): KeyBindingsState | Promise<KeyBindingsState>
}

export const wrapCommand = (fn: Fn): WrappedFn => {
  const wrapped = async (uid: number, ...args: readonly any[]): Promise<void> => {
    const { newState } = KeyBindingsStates.get(uid)
    const newerState = await fn(newState, ...args)
    if (newState === newerState) {
      return
    }
    const latest = KeyBindingsStates.get(uid)
    KeyBindingsStates.set(uid, latest.oldState, newerState)
  }
  return wrapped
}
