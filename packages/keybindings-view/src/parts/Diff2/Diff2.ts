import * as Diff from '../Diff/Diff.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { newState, oldState } = KeyBindingsStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
