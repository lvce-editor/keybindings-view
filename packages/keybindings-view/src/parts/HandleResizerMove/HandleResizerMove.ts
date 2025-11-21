import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { distributeColumns } from '../DistributeColumns/DistributeColumns.ts'

export const handleResizerMove = (state: KeyBindingsState, eventX: number): KeyBindingsState => {
  const { resizerDownId, contentPadding, width, columnWidth1, columnWidth2, x } = state
  const { newColumnWidth1, newColumnWidth2, newColumnWidth3 } = distributeColumns(
    resizerDownId,
    contentPadding,
    width,
    columnWidth1,
    columnWidth2,
    x,
    eventX,
  )
  return {
    ...state,
    columnWidth1: newColumnWidth1,
    columnWidth2: newColumnWidth2,
    columnWidth3: newColumnWidth3,
  }
}
