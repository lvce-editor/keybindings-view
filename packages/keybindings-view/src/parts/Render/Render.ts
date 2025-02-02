import * as DiffColumnWidths from '../DiffColumnWidths/DiffColumnWidths.ts'
import * as DiffKeyBindings from '../DiffKeyBindings/DiffKeyBindings.ts'
import * as DiffValue from '../DiffValue/DiffValue.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as GetVisibleKeyBindings from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'

const renderKeyBindings = {
  isEqual: DiffKeyBindings.isEqual,
  apply(oldState: KeyBindingsState, newState: KeyBindingsState): any {
    const {
      items,
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
      isRecordingKeys,
      value,
    } = newState
    const deltaY = minLineY * itemHeight
    const percent = deltaY / finalDeltaY
    const listHeight = height - tableHeaderHeight - searchHeaderHeight
    const total = items.length
    const contentHeight = total * itemHeight
    const scrollBarThumbHeight = GetScrollBarSize.getScrollBarSize(listHeight, contentHeight, newState.minimumSliderSize)
    const scrollBarThumbTop = (height - scrollBarThumbHeight) * percent

    const displayKeyBindings = GetVisibleKeyBindings.getVisibleKeyBindings(items, minLineY, maxLineY, selectedIndex)
    // TODO do dom diffing for faster incremental updates, e.g. when scrolling
    // console.time('tableDom')
    const tableDom = GetKeyBindingsVirtualDom.getKeyBindingsVirtualDom(
      items,
      displayKeyBindings,
      columnWidth1,
      columnWidth2,
      columnWidth3,
      scrollBarThumbHeight,
      scrollBarThumbTop,
      isRecordingKeys,
      value,
    )
    // console.timeEnd('tableDom')
    // console.log({ tableDom })
    return ['Viewlet.setDom2', /* tableDom */ tableDom]
  },
}

// @ts-ignore
const renderColumnWidths = {
  isEqual: DiffColumnWidths.isEqual,
  apply(oldState: KeyBindingsState, newState: KeyBindingsState): any {
    return [/* method */ 'setColumnWidths', newState.columnWidth1, newState.columnWidth2, newState.columnWidth3]
  },
}

const renderValue = {
  isEqual: DiffValue.isEqual,
  apply(oldState: KeyBindingsState, newState: KeyBindingsState): any {
    return [/* method */ 'setValue', /* setValue */ newState.value]
  },
}

// TODO
// @ts-ignore
const renderNoResults = {
  isEqual(oldState: KeyBindingsState, newState: KeyBindingsState): boolean {
    return oldState.value === newState.value && newState.items.length === 0
  },
  apply(oldState: KeyBindingsState, newState: KeyBindingsState): any {
    const message = newState.items.length === 0 ? 'No Results found' : ''
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
