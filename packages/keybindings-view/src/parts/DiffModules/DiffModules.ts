import * as DiffColumnWidths from '../DiffColumnWidths/DiffColumnWidths.ts'
import * as DiffCss from '../DiffCss/DiffCss.ts'
import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffFocusContext from '../DiffFocusContext/DiffFocusContext.ts'
import * as DiffKeyBindings from '../DiffKeyBindings/DiffKeyBindings.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as DiffValue from '../DiffValue/DiffValue.ts'
import * as DiffWhenExpressionText from '../DiffWhenExpressionText/DiffWhenExpressionText.ts'

export const modules = [
  DiffKeyBindings.isEqual,
  DiffColumnWidths.isEqual,
  DiffValue.isEqual,
  DiffFocus.isEqual,
  DiffFocusContext.isEqual,
  DiffWhenExpressionText.isEqual,
  DiffCss.isEqual,
]

export const numbers = [
  DiffType.RenderIncremental,
  DiffType.RenderColumnWidth,
  DiffType.RenderValue,
  DiffType.RenderFocus,
  DiffType.RenderFocusContext,
  DiffType.RenderWhenExpressionValue,
  DiffType.RenderCss,
]
