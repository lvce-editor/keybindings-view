import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getSearchFieldClassName = (checked: boolean, enabled: boolean): string => {
  if (checked) {
    return MergeClassNames.mergeClassNames(ClassNames.SearchFieldButton, ClassNames.SearchFieldButtonChecked)
  }
  if (!enabled) {
    return MergeClassNames.mergeClassNames(ClassNames.SearchFieldButton, ClassNames.SearchFieldButtonDisabled)
  }
  return ClassNames.SearchFieldButton
}
