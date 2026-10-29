import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { distributeColumns } from '../DistributeColumns/DistributeColumns.ts'

export const handleResizerMove = (state: KeyBindingsState, eventX: number): KeyBindingsState => {
  const { columnWidth0, columnWidth1, columnWidth2, columnWidth3, contentPadding, paddingLeft, resizerDownId, sourceColumnWidth, width, x } = state
  if (!resizerDownId) {
    return state
  }
  const { newColumnWidth1, newColumnWidth2, newColumnWidth3, newSourceColumnWidth } = distributeColumns(
    resizerDownId,
    contentPadding,
    width,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    sourceColumnWidth,
    x,
    eventX,
  )
  const resizerOneLeft = paddingLeft + columnWidth0 + newColumnWidth1
  const resizerTwoLeft = resizerOneLeft + newColumnWidth2
  const resizerThreeLeft = resizerTwoLeft + newColumnWidth3 - newSourceColumnWidth
  return {
    ...state,
    columnWidth1: newColumnWidth1,
    columnWidth2: newColumnWidth2,
    columnWidth3: newColumnWidth3,
    resizerOneLeft,
    resizerThreeLeft,
    resizerTwoLeft,
    sourceColumnWidth: newSourceColumnWidth,
  }
}
