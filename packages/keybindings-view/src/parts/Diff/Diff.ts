import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as DiffColumnWidths from '../DiffColumnWidths/DiffColumnWidths.ts'
import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffKeyBindings from '../DiffKeyBindings/DiffKeyBindings.ts'
import * as DiffValue from '../DiffValue/DiffValue.ts'

const modules = [DiffKeyBindings, DiffColumnWidths, DiffValue, DiffFocus]

export const diff = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly number[] => {
  const diffResult: number[] = []
  for (const module of modules) {
    if (!module.isEqual(oldState, newState)) {
      diffResult.push(module.diffType)
    }
  }
  return diffResult
}
