import { ViewletCommand } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getCss } from '../GetCss/GetCss.ts'

export const renderCss = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid, columnWidth0, columnWidth1, columnWidth2, columnWidth3, resizerOneLeft, resizerTwoLeft } = newState
  const css = getCss(columnWidth0, columnWidth1, columnWidth2, columnWidth3, resizerOneLeft, resizerTwoLeft)
  return [ViewletCommand.SetCss, uid, css]
}
