export interface KeyBindingsState {
  readonly parsedKeyBindings: readonly any[]
  readonly filteredKeyBindings: readonly any[]
  readonly minLineY: number
  readonly maxLineY: number
  readonly maxVisibleItems: number
  readonly rowHeight: number
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
  readonly value: string
  readonly selectedIndex: number
  readonly focusedIndex: number
  readonly finalDeltaY: number
  readonly deltaY: number
  readonly uri: string
  readonly columnWidth1: number
  readonly columnWidth2: number
  readonly columnWidth3: number
  readonly contentPadding: number
  readonly resizerDownId: number
  readonly defineKeyBindingsId: number
  readonly editIconSize: number
  readonly padding: number
  readonly searchHeaderHeight: number
  readonly tableHeaderHeight: number
}
