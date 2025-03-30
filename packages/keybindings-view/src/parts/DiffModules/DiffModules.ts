import * as DiffColumnWidths from '../DiffColumnWidths/DiffColumnWidths.ts'
import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffKeyBindings from '../DiffKeyBindings/DiffKeyBindings.ts'
import * as DiffValue from '../DiffValue/DiffValue.ts'

export const modules = [DiffKeyBindings.isEqual, DiffColumnWidths.isEqual, DiffValue.isEqual, DiffFocus.isEqual]

export const numbers = [DiffKeyBindings.diffType, DiffColumnWidths.diffType, DiffValue.diffType, DiffFocus.diffType]
