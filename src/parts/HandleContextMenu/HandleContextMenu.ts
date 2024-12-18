import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const handleContextMenu = async (state: KeyBindingsState, button: number, x: number, y: number): Promise<KeyBindingsState> => {
  await ContextMenu.show(x, y, MenuEntryId.KeyBindingsTable)
  return state
}
