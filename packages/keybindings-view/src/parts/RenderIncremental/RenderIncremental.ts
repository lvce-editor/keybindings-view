import { ViewletCommand } from '@lvce-editor/constants'
import { diffTree } from '@lvce-editor/virtual-dom-worker'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import { renderKeyBindings } from '../GetRenderer/RenderKeyBindings.ts'

export const renderIncremental = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const oldDom = renderKeyBindings(oldState, oldState)[2]
  const newDom = renderKeyBindings(newState, newState)[2]
  const patches = diffTree(oldDom, newDom)
  return [ViewletCommand.SetPatches, newState.uid, patches]
}
