import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as Diff from '../Diff/Diff.ts'
import * as GetRenderer from '../GetRenderer/GetRenderer.ts'

export const getRenderCommands = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const diffResult = Diff.diff(oldState, newState)
  const commands = []
  for (const item of diffResult) {
    const fn = GetRenderer.getRenderer(item)
    commands.push(fn.apply(oldState, newState))
  }
  return commands
}
