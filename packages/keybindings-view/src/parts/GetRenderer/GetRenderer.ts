import type { KeyBindingsState } from '../KeyBindingsState/KeyBindingsState.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import { renderKeyBindings } from './RenderKeyBindings.ts'
import { renderColumnWidths } from './RenderColumnWidths.ts'
import { renderValue } from './RenderValue.ts'
import { renderFocus } from './RenderFocus.ts'
import type { Renderer } from './Renderer.ts'

 

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
    default:
      throw new Error('unknown renderer')
  }
}
