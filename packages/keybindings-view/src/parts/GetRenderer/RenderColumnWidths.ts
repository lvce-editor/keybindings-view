import { ViewletCommand } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

const getCss = (columnWidth1: number, columnWidth2: number, columnWidth3: number, sourceColumnWidth: number): string => {
  return `.KeyBindings {
  --ColumnWidth1: ${columnWidth1}px;
  --ColumnWidth2: ${columnWidth2}px;
  --ColumnWidth3: ${columnWidth3}px;
  --ColumnWidth4: ${sourceColumnWidth}px;
}`
}

export const renderColumnWidths = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { columnWidth1, columnWidth2, columnWidth3, sourceColumnWidth, uid } = newState
  const css = getCss(columnWidth1, columnWidth2, columnWidth3, sourceColumnWidth)
  return [ViewletCommand.SetCss, uid, css]
}
