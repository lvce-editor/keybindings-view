import type { List } from '../List/List.ts'
import { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'

export interface KeyBindingsState extends List<ParsedKeyBinding> {
  readonly parsedKeyBindings: readonly ParsedKeyBinding[]
  readonly items: readonly ParsedKeyBinding[]
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
  readonly minimumSliderSize: number
  readonly isRecordingKeys: boolean
  readonly isSortingByPrecedence: boolean
  readonly inputSource: number
  readonly uid: number
}
