import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const sortByPrecedence = (state: KeyBindingsState): KeyBindingsState => {
  const { isSortingByPrecedence } = state
  if (isSortingByPrecedence) {
    return {
      ...state,
      isSortingByPrecedence: false,
    }
  }
  return {
    ...state,
    isSortingByPrecedence: true,
  }
}
