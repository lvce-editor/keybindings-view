import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as InputSource from '../InputSource/InputSource.ts'
import * as KeyBindingsStates from '../KeyBindingsStates/KeyBindingsStates.ts'

// TODO uri and platform might not be needed
export const create = (uid: number, uri: string, x: number, y: number, width: number, height: number, platform: number): void => {
  const state: KeyBindingsState = {
    columnWidth0: 30,
    columnWidth1: 0,
    columnWidth2: 0,
    columnWidth3: 0,
    resizerOneLeft: 0,
    resizerTwoLeft: 0,
    contentPadding: 30,
    defineKeyBindingsId: -1,
    deltaY: 0,
    editIconSize: 22,
    editingWhenExpression: false,
    finalDeltaY: 0,
    focus: 0,
    focusedIndex: -1,
    headerHeight: 0,
    height,
    inputSource: InputSource.User,
    isRecordingKeys: false,
    isSortingByPrecedence: false,
    itemHeight: 24,
    items: [],
    maxLineY: 0,
    maxVisibleItems: 0,
    minimumSliderSize: 20,
    minLineY: 0,
    padding: 15,
    parsedKeyBindings: [],
    resizerDownId: 0,
    searchHeaderHeight: 50,
    selectedIndex: -1,
    tableHeaderHeight: 24,
    uid,
    uri,
    value: '',
    whenExpressionText: '',
    width,
    x,
    y,
    visibleItems: [],
  }
  KeyBindingsStates.set(uid, state, state)
}
