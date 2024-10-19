import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getRowClassName = (isEven, selected) => {
  return MergeClassNames.mergeClassNames(
    ClassNames.KeyBindingsTableRow,
    isEven ? ClassNames.KeyBindingsTableRowEven : ClassNames.KeyBindingsTableRowOdd,
    selected ? ClassNames.KeyBindingsTableRowSelected : ''
  )
}
