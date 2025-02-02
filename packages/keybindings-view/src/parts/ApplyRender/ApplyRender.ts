import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetRenderer from '../GetRenderer/GetRenderer.ts'

export const applyRender = (oldState: KeyBindingsState, newState: KeyBindingsState, diffResult: readonly number[]): readonly any[] => {
  const commands = []
  for (const item of diffResult) {
    const fn = GetRenderer.getRenderer(item)
    commands.push(fn(oldState, newState))
  }
  return commands
}
