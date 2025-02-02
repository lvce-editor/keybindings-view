import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as GetKeyBindingsVirtualDom from '../GetKeyBindingsVirtualDom/GetKeyBindingsVirtualDom.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as GetVisibleKeyBindings from '../GetVisibleKeyBindings/GetVisibleKeyBindings.ts'
import * as InputName from '../InputName/InputName.ts'

interface Renderer {
  (oldState: KeyBindingsState, newState: KeyBindingsState): any
}

const renderKeyBindings = (oldState: KeyBindingsState, newState: KeyBindingsState): any => {
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
}

// @ts-ignore
const renderColumnWidths = (oldState: KeyBindingsState, newState: KeyBindingsState): any => {
  return [/* method */ 'setColumnWidths', newState.columnWidth1, newState.columnWidth2, newState.columnWidth3]
}

const renderValue = (oldState: KeyBindingsState, newState: KeyBindingsState): any => {
  return [/* method */ 'setValue', /* setValue */ newState.value]
}

// TODO
// @ts-ignore
const renderNoResults = (oldState: KeyBindingsState, newState: KeyBindingsState): any => {
  const message = newState.items.length === 0 ? 'No Results found' : ''
  return [/* Viewlet.ariaAnnounce */ 'Viewlet.ariaAnnounce', /* message */ message]
}

const renderFocus = (oldState: KeyBindingsState, newState: KeyBindingsState): any => {
  return ['Viewlet.focusSelector', InputName.KeyBindingsInput]
}

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderColumnWidth:
      return renderColumnWidths
    case DiffType.RenderKeyBindings:
      return renderKeyBindings
    case DiffType.RenderValue:
      return renderValue
    case DiffType.RenderFocus:
      return renderFocus
    default:
      throw new Error('unknown renderer')
  }
}
