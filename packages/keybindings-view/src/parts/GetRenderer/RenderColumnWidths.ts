import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

// @ts-ignore
export const renderColumnWidths = (oldState: KeyBindingsState, newState: KeyBindingsState): any => {
  return [/* method */ 'Viewlet.setCss', newState.uid, '', newState.columnWidth1, newState.columnWidth2, newState.columnWidth3]
}
