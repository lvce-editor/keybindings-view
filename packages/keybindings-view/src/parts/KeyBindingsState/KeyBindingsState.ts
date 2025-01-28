import type { List } from '../List/List.ts'

export interface KeyBindingsState extends List<any> {
  readonly parsedKeyBindings: readonly any[]
  readonly filteredKeyBindings: readonly any[] // TODO rename to items
  readonly maxVisibleItems: number
  readonly x: number
  readonly y: number
  readonly width: number
  readonly value: string
  readonly selectedIndex: number
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
