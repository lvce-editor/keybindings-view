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
    const { command, commandMatches, isCtrl, isShift, key, keyMatches, when } = slicedKeyBinding
    const rowIndex = minLineY + i + 2
    visibleKeyBindings.push({
      command,
      commandMatches,
      isCtrl,
      isEditingWhenExpression: i === relativeSelectedIndex && isEditingWhenExpression,
      isEven: rowIndex % 2 === 0,
      isShift,
      key,
      keyMatches,
      rowIndex,
      selected: i === relativeSelectedIndex,
      when: GetWhenExpressionText.getWhenExpressionText(when),
    })
  }
  return visibleKeyBindings
}
