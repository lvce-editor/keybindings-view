import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as Diff from '../Diff/Diff.ts'

export const getRenderCommands = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const diffResult = Diff.diff(oldState, newState)
  return ApplyRender.applyRender(oldState, newState, diffResult)
}
