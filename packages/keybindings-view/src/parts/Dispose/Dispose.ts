import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

export const dispose = (uid: number): void => {
  KeyBindingsStates.dispose(uid)
}
