import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

// TODO uri and platform might not be needed
export const create = (uid: number, uri: string, x: number, y: number, width: number, height: number, platform: number): void => {
  // @ts-ignore
  const state: KeyBindingsState = {
    parsedKeyBindings: [],
    filteredKeyBindings: [],
    minLineY: 0,
    maxLineY: 0,
    maxVisibleItems: 0,
    x,
    y,
    width,
    height,
    value: '',
    selectedIndex: -1,
    focusedIndex: -1,
    finalDeltaY: 0,
    deltaY: 0,
    uri,
    columnWidth1: 0,
    columnWidth2: 0,
    columnWidth3: 0,
    contentPadding: 30,
    resizerDownId: 0,
    defineKeyBindingsId: -1,
    editIconSize: 22,
    padding: 15,
    searchHeaderHeight: 50,
    tableHeaderHeight: 24,
    itemHeight: 24,
    minimumSliderSize: 20,
  }
  KeyBindingsStates.set(uid, state, state)
}
