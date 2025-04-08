const compareByPrecedence = (a: any, b: any): number => {
  const aWhen = a.when || 0
  const bWhen = b.when || 0
  return bWhen - aWhen
}

export const sortKeyBindings = (parsedKeyBindings: readonly any[], isSortingByPrecedence: boolean): readonly any[] => {
  if (!isSortingByPrecedence) {
    return parsedKeyBindings
  }
  return parsedKeyBindings.toSorted(compareByPrecedence)
}
