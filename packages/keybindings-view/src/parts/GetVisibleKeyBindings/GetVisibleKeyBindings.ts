import type { VisibleKeyBinding } from '../VisibleKeyBinding/VisibleKeyBinding.ts'
import * as GetWhenExpressionText from '../GetWhenExpressionText/GetWhenExpressionText.ts'

export const getVisibleKeyBindings = (
  filteredKeyBindings: any,
  minLineY: number,
  maxLineY: number,
  selectedIndex: number,
): readonly VisibleKeyBinding[] => {
  const visibleKeyBindings: VisibleKeyBinding[] = []
  const slicedKeyBindings = filteredKeyBindings.slice(minLineY, maxLineY)
  const relativeSelectedIndex = selectedIndex - minLineY
  for (let i = 0; i < slicedKeyBindings.length; i++) {
    const slicedKeyBinding = slicedKeyBindings[i]
    const { isCtrl, isShift, key, when, command, commandMatches, keyMatches } = slicedKeyBinding
    visibleKeyBindings.push({
      rowIndex: minLineY + i + 2,
      isCtrl,
      isShift,
      key,
      when: GetWhenExpressionText.getWhenExpressionText(when),
      command,
      selected: i === relativeSelectedIndex,
      commandMatches,
      keyMatches,
    })
  }
  return visibleKeyBindings
}
