import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const checkedClassName = MergeClassNames.mergeClassNames(ClassNames.SearchFieldButton, ClassNames.SearchFieldButtonChecked)
const disabledClassName = MergeClassNames.mergeClassNames(ClassNames.SearchFieldButton, ClassNames.SearchFieldButtonDisabled)

export const getSearchFieldClassName = (checked: boolean, enabled: boolean): string => {
  if (checked) {
    return checkedClassName
  }
  if (!enabled) {
    return disabledClassName
  }
  return ClassNames.SearchFieldButton
}
