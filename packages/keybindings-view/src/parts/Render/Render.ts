import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
import * as GetVisibleKeyBindings from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

const renderKeyBindings = {
  isEqual(oldState: any, newState: any): boolean {
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
  apply(oldState: any, newState: any): any {
    const { filteredKeyBindings, minLineY, maxLineY, selectedIndex, columnWidth1, columnWidth2, columnWidth3, finalDeltaY, rowHeight, height } =
      newState
    const deltaY = minLineY * rowHeight
    const percent = deltaY / finalDeltaY
    const scrollBarThumbHeight = 70
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
  isEqual(oldState: any, newState: any): boolean {
    return (
      oldState.columnWidth1 === newState.columnWidth1 &&
      oldState.columnWidth2 === newState.columnWidth2 &&
      oldState.columnWidth3 === newState.columnWidth3
    )
  },
  apply(oldState: any, newState: any): any {
    return [/* method */ 'setColumnWidths', newState.columnWidth1, newState.columnWidth2, newState.columnWidth3]
  },
}

const renderValue = {
  isEqual(oldState: any, newState: any): boolean {
    return oldState.value === newState.value
  },
  apply(oldState: any, newState: any): any {
    return [/* method */ 'setValue', /* setValue */ newState.value]
  },
}

// @ts-ignore
const renderNoResults = {
  isEqual(oldState: any, newState: any): boolean {
    return oldState.value === newState.value && newState.filteredKeyBindings.length === 0
  },
  apply(oldState: any, newState: any): any {
    const message = newState.filteredKeyBindings.length === 0 ? 'No Results found' : ''
    return [/* Viewlet.ariaAnnounce */ 'Viewlet.ariaAnnounce', /* message */ message]
  },
}

// @ts-ignore
const renderScrollBar = {
  isEqual(oldState: any, newState: any): boolean {
    return (
      oldState.negativeMargin === newState.negativeMargin &&
      oldState.deltaY === newState.deltaY &&
      oldState.height === newState.height &&
      oldState.finalDeltaY === newState.finalDeltaY
    )
  },
  apply(oldState: any, newState: any): any {
    const scrollBarY = ScrollBarFunctions.getScrollBarY(newState.deltaY, newState.finalDeltaY, newState.height, newState.scrollBarHeight)
    return [/* method */ 'setScrollBar', /* scrollBarY */ scrollBarY, /* scrollBarHeight */ newState.scrollBarHeight]
  },
}

const render = [
  renderKeyBindings,
  renderValue,
  // renderNoResults, renderScrollBar, renderColumnWidths
]

export const getRenderCommands = (oldState: any, newState: any): readonly any[] => {
  const commands: any[] = []
  for (const part of render) {
    if (!part.isEqual(oldState, newState)) {
      commands.push(part.apply(oldState, newState))
    }
  }
  return commands
}
