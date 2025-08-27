import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

export const render3 = (uid: number, diffResult: readonly number[]): readonly any[] => {
  if (diffResult.length === 0) {
    return []
  }
  const { oldState, newState } = KeyBindingsStates.get(uid)
  KeyBindingsStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}
