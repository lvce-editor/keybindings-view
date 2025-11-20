import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetSearchActionClickHandler from '../GetSearchActionClickHandler/GetSearchActionClickHandler.ts'

export const handleSearchActionClick = (state: KeyBindingsState, name: string): KeyBindingsState | Promise<KeyBindingsState> => {
  const fn = GetSearchActionClickHandler.getSearchActionClickHandler(name)
  return fn(state)
}
