import type { List } from '../List/List.ts'
import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'

export interface KeyBindingsState extends List<any> {
  readonly columnWidth1: number
  readonly columnWidth2: number
  readonly columnWidth3: number
  readonly contentPadding: number
  readonly defineKeyBindingsId: number
  readonly deltaY: number
  readonly editIconSize: number
  readonly editingWhenExpression: boolean
  readonly finalDeltaY: number
  readonly focus: number
  readonly inputSource: number
  readonly isRecordingKeys: boolean
  readonly isSortingByPrecedence: boolean
  readonly items: readonly ParsedKeyBinding[]
  readonly maxVisibleItems: number
  readonly minimumSliderSize: number
  readonly padding: number
  readonly parsedKeyBindings: readonly ParsedKeyBinding[]
  readonly resizerDownId: number
  readonly searchHeaderHeight: number
  readonly selectedIndex: number
  readonly tableHeaderHeight: number
  readonly uid: number
  readonly uri: string
  readonly value: string
  readonly visibleItems: readonly VisibleKeyBinding[]
  readonly whenExpressionText: string
  readonly width: number
  readonly x: number
  readonly y: number
  readonly scrollBarHeight?: number
}
