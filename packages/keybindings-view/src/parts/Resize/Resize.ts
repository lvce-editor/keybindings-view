import type { Dimensions } from '../Dimensions/Dimensions.ts'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const resize = (state: KeyBindingsState, dimensions: Dimensions): KeyBindingsState => {
  const { contentPadding, columnWidth0 } = state
  const { width } = dimensions
  const contentWidth = width - contentPadding
  const columnWidth1 = contentWidth / 3
  const columnWidth2 = contentWidth / 3
  const columnWidth3 = contentWidth / 3
  const resizerOneLeft = columnWidth0 + columnWidth1
  const resizerTwoLeft = columnWidth0 + columnWidth1 + columnWidth2
  return {
    ...state,
    ...dimensions,
    columnWidth1,
    columnWidth2,
    columnWidth3,
    resizerOneLeft,
    resizerTwoLeft,
  }
}
