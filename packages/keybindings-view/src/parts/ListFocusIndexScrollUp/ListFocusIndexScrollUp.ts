import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const focusIndexScrollUp = (
  state: KeyBindingsState,
  index: number,
  listHeight: number,
  itemHeight: number,
  itemsLength: number,
): KeyBindingsState => {
  const newMinLineY = index
  const fittingItems = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  const newMaxLineY = Math.min(newMinLineY + fittingItems, itemsLength)
  const newDeltaY = newMinLineY * itemHeight
  const visibleItems = getVisibleKeyBindings(state.items, newMinLineY, newMaxLineY, state.selectedIndex, state.editingWhenExpression)
  return {
    ...state,
    focusedIndex: index,
    minLineY: newMinLineY,
    maxLineY: newMaxLineY,
    focused: true,
    deltaY: newDeltaY,
    selectedIndex: index,
    visibleItems,
  }
}
