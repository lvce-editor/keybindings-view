import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const handleKeyDown = (state: KeyBindingsState, altKey: boolean, ctrlKey: boolean, key: string): KeyBindingsState => {
  const { isRecordingKeys, value } = state
  if (!isRecordingKeys) {
    return state
  }
  return {
    ...state,
    value: `${value} ${key}`,
  }
}
