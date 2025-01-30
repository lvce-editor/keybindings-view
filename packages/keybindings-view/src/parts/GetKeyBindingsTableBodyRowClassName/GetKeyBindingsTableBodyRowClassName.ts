import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getRowClassName = (isEven: boolean, selected: boolean): string => {
  return MergeClassNames.mergeClassNames(
    ClassNames.TableRow,
    isEven ? ClassNames.TableRowEven : ClassNames.TableRowOdd,
    selected ? ClassNames.TableRowSelected : '',
  )
}
