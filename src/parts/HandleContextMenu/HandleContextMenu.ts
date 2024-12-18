import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleContextMenu = async (state: KeyBindingsState, button: number, x: number, y: number): Promise<KeyBindingsState> => {
  // await ContextMenu.show(x, y, MenuEntryId.KeyBindingsTable)
  return state
}
