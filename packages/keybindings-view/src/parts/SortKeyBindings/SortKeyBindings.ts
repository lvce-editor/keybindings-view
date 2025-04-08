import { compareByName, compareByPrecedence } from '../CompareKeyBinding/CompareKeyBinding.ts'

interface CompareFn {
  (a: any, b: any): number
}

const getCompareFn = (isSortingByPrecedence: boolean): CompareFn => {
  const sortFn = isSortingByPrecedence ? compareByPrecedence : compareByName
  return sortFn
}

export const sortKeyBindings = (parsedKeyBindings: readonly any[], isSortingByPrecedence: boolean): readonly any[] => {
  const sortFn = getCompareFn(isSortingByPrecedence)
  const sorted = parsedKeyBindings.toSorted(sortFn)
  return sorted
}
