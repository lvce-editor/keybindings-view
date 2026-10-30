import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as FilterKeyBindings from '../FilterKeyBindings/FilterKeyBindings.ts'
import * as FocusKey from '../FocusKey/FocusKey.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'
import * as SortKeyBindings from '../SortKeyBindings/SortKeyBindings.ts'

export const handleInput = (state: KeyBindingsState, value: string): KeyBindingsState => {
  const { deltaY, isRecordingKeys, isSortingByPrecedence, parsedKeyBindings } = state
  const filterValue = isRecordingKeys ? `"${value.replaceAll('+', ' + ')}"` : value
  const items = FilterKeyBindings.getFilteredKeyBindings(parsedKeyBindings, filterValue)
  const sorted = SortKeyBindings.sortKeyBindings(items, isSortingByPrecedence)
  const filteredState = {
    ...state,
    focus: FocusKey.Input,
    inputSource: InputSource.User,
    items: sorted,
    value,
  }
  return SetDeltaY.setDeltaY(filteredState, deltaY)
}
