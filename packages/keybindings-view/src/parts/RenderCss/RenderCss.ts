import { ViewletCommand } from '@lvce-editor/constants'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { getCss } from '../GetCss/GetCss.ts'

export const renderCss = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const { uid } = newState
  const css = getCss()
  return [ViewletCommand.SetCss, uid, css]
}
