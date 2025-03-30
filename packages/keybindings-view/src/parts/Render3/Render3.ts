import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

export const render3 = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { oldState, newState } = KeyBindingsStates.get(uid)
  return ApplyRender.applyRender(oldState, newState, diffResult)
}
