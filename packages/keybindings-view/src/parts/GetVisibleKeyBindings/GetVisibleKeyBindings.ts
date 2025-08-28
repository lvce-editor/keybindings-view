import type { ParsedKeyBinding } from '../ParsedKeyBinding/ParsedKeyBinding.ts'
import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as GetWhenExpressionText from '../GetWhenExpressionText/GetWhenExpressionText.ts'

export const getVisibleKeyBindings = (
  filteredKeyBindings: readonly ParsedKeyBinding[],
  minLineY: number,
  maxLineY: number,
  selectedIndex: number,
  isEditingWhenExpression: boolean,
): readonly VisibleKeyBinding[] => {
  const visibleKeyBindings: VisibleKeyBinding[] = []
  const slicedKeyBindings = filteredKeyBindings.slice(minLineY, maxLineY)
  const relativeSelectedIndex = selectedIndex - minLineY
  for (let i = 0; i < slicedKeyBindings.length; i++) {
    const slicedKeyBinding = slicedKeyBindings[i]
    const { isCtrl, isShift, key, when, command, commandMatches, keyMatches } = slicedKeyBinding
    const rowIndex = minLineY + i + 2
    visibleKeyBindings.push({
      rowIndex,
      isCtrl,
      isShift,
      key,
      when: GetWhenExpressionText.getWhenExpressionText(when),
      command,
      selected: i === relativeSelectedIndex,
      isEditingWhenExpression: i === relativeSelectedIndex && isEditingWhenExpression,
      commandMatches,
      keyMatches,
      isEven: rowIndex % 2 === 0,
    })
  }
  return visibleKeyBindings
}
