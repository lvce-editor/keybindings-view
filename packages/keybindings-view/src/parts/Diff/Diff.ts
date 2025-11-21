import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as DiffModules from '../DiffModules/DiffModules.ts'

export const diff = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly number[] => {
  if (oldState === newState) {
    return []
  }
  const diffResult: number[] = []
  for (let i = 0; i < DiffModules.modules.length; i++) {
    const fn = DiffModules.modules[i]
    if (!fn(oldState, newState)) {
      diffResult.push(DiffModules.numbers[i])
    }
  }
  return diffResult
}
