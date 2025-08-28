import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import { getVisibleKeyBindings } from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

export const focusIndexScrollDown = (
  state: KeyBindingsState,
  index: number,
  listHeight: number,
  itemHeight: number,
  itemsLength: number,
): KeyBindingsState => {
  const newMaxLineY = Math.min(index + 1, itemsLength)
  const fittingItems = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  const newMinLineY = Math.max(newMaxLineY - fittingItems, 0)
  const newDeltaY = itemsLength < fittingItems ? 0 : newMinLineY * itemHeight - (listHeight % itemHeight) + itemHeight
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
