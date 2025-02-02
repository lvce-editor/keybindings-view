import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffKeyBindings = {
  diffType: DiffType.RenderKeyBindings,
  isEqual(oldState: KeyBindingsState, newState: KeyBindingsState): boolean {
    return (
      oldState.items === newState.items &&
      oldState.minLineY === newState.minLineY &&
      oldState.maxLineY === newState.maxLineY &&
      oldState.selectedIndex === newState.selectedIndex &&
      oldState.focusedIndex === newState.focusedIndex &&
      oldState.columnWidth1 === newState.columnWidth1 &&
      oldState.columnWidth2 === newState.columnWidth2 &&
      oldState.columnWidth3 === newState.columnWidth3 &&
      oldState.isRecordingKeys === newState.isRecordingKeys
    )
  },
}

export const diffColumnWidths = {
  diffType: DiffType.RenderColumnWidth,
  isEqual(oldState: KeyBindingsState, newState: KeyBindingsState): boolean {
    return (
      oldState.columnWidth1 === newState.columnWidth1 &&
      oldState.columnWidth2 === newState.columnWidth2 &&
      oldState.columnWidth3 === newState.columnWidth3
    )
  },
}

export const diffValue = {
  diffType: DiffType.RenderValue,
  isEqual(oldState: KeyBindingsState, newState: KeyBindingsState): boolean {
    return oldState.value === newState.value
  },
}

const modules = [diffKeyBindings, diffColumnWidths, diffValue]

export const diff = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly number[] => {
  const diffResult: number[] = []
  for (const module of modules) {
    if (!module.isEqual(oldState, newState)) {
      diffResult.push(module.diffType)
    }
  }
  return diffResult
}
