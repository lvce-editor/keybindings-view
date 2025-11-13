import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const handleContextMenu = async (state: KeyBindingsState, button: number, eventX: number, eventY: number): Promise<KeyBindingsState> => {
  const { y, searchHeaderHeight, tableHeaderHeight } = state
  if (eventY <= y + searchHeaderHeight + tableHeaderHeight) {
    return state
  }
  // TODO find the index of the matched item and if there is a matching entry, show context menu
  await ContextMenu.show(eventX, eventY, MenuEntryId.KeyBindingsTable)
  return state
}
