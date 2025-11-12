import type { Renderer } from './Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import { renderCss } from '../RenderCss/RenderCss.ts'
import { renderColumnWidths } from './RenderColumnWidths.ts'
import { renderFocus } from './RenderFocus.ts'
import { renderFocusContext } from './RenderFocusContext.ts'
import { renderKeyBindings } from './RenderKeyBindings.ts'
import { renderValue } from './RenderValue.ts'
import { renderWhenExpressionValue as renderWhenExpressionValue } from './RenderWhenExpressionValue.ts'

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
    case DiffType.RenderFocusContext:
      return renderFocusContext
    case DiffType.RenderWhenExpressionValue:
      return renderWhenExpressionValue
    case DiffType.RenderCss:
      return renderCss
    default:
      throw new Error('unknown renderer')
  }
}
