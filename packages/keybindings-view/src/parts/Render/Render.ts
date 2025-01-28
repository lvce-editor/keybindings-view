import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as GetVisibleKeyBindings from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'

const renderKeyBindings = {
  isEqual(oldState: KeyBindingsState, newState: KeyBindingsState): boolean {
    return (
      oldState.filteredKeyBindings === newState.filteredKeyBindings &&
      oldState.minLineY === newState.minLineY &&
      oldState.maxLineY === newState.maxLineY &&
      oldState.selectedIndex === newState.selectedIndex &&
      oldState.focusedIndex === newState.focusedIndex &&
      oldState.columnWidth1 === newState.columnWidth1 &&
      oldState.columnWidth2 === newState.columnWidth2 &&
      oldState.columnWidth3 === newState.columnWidth3
    )
  },
  apply(oldState: KeyBindingsState, newState: KeyBindingsState): any {
    const {
      filteredKeyBindings,
      minLineY,
      maxLineY,
      selectedIndex,
      columnWidth1,
      columnWidth2,
      columnWidth3,
      finalDeltaY,
      itemHeight,
      height,
      searchHeaderHeight,
      tableHeaderHeight,
    } = newState
    const deltaY = minLineY * itemHeight
    const percent = deltaY / finalDeltaY
    const listHeight = height - tableHeaderHeight - searchHeaderHeight
    const total = filteredKeyBindings.length
    const contentHeight = total * itemHeight
    const scrollBarThumbHeight = GetScrollBarSize.getScrollBarSize(listHeight, contentHeight, newState.minimumSliderSize)
    const scrollBarThumbTop = (height - scrollBarThumbHeight) * percent

    const displayKeyBindings = GetVisibleKeyBindings.getVisibleKeyBindings(filteredKeyBindings, minLineY, maxLineY, selectedIndex)
    // TODO do dom diffing for faster incremental updates, e.g. when scrolling
    // console.time('tableDom')
    const tableDom = GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom(
      filteredKeyBindings,
      displayKeyBindings,
      columnWidth1,
      columnWidth2,
      columnWidth3,
      scrollBarThumbHeight,
      scrollBarThumbTop,
    )
    // console.timeEnd('tableDom')
    // console.log({ tableDom })
    return ['Viewlet.setDom2', /* tableDom */ tableDom]
  },
}

// @ts-ignore
const renderColumnWidths = {
  isEqual(oldState: KeyBindingsState, newState: KeyBindingsState): boolean {
    return (
      oldState.columnWidth1 === newState.columnWidth1 &&
      oldState.columnWidth2 === newState.columnWidth2 &&
      oldState.columnWidth3 === newState.columnWidth3
    )
  },
  apply(oldState: KeyBindingsState, newState: KeyBindingsState): any {
    return [/* method */ 'setColumnWidths', newState.columnWidth1, newState.columnWidth2, newState.columnWidth3]
  },
}

const renderValue = {
  isEqual(oldState: KeyBindingsState, newState: KeyBindingsState): boolean {
    return oldState.value === newState.value
  },
  apply(oldState: KeyBindingsState, newState: KeyBindingsState): any {
    return [/* method */ 'setValue', /* setValue */ newState.value]
  },
}

// TODO
// @ts-ignore
const renderNoResults = {
  isEqual(oldState: KeyBindingsState, newState: KeyBindingsState): boolean {
    return oldState.value === newState.value && newState.filteredKeyBindings.length === 0
  },
  apply(oldState: KeyBindingsState, newState: KeyBindingsState): any {
    const message = newState.filteredKeyBindings.length === 0 ? 'No Results found' : ''
    return [/* Viewlet.ariaAnnounce */ 'Viewlet.ariaAnnounce', /* message */ message]
  },
}

const render = [
  renderKeyBindings,
  renderValue,
  // renderNoResults, renderScrollBar, renderColumnWidths
]

export const getRenderCommands = (oldState: KeyBindingsState, newState: KeyBindingsState): readonly any[] => {
  const commands: any[] = []
  for (const part of render) {
    if (!part.isEqual(oldState, newState)) {
      commands.push(part.apply(oldState, newState))
    }
  }
  return commands
}
