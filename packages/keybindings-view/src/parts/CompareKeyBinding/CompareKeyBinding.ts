export const compareByPrecedence = (a: any, b: any): number => {
  const aWhen = a.when || 0
  const bWhen = b.when || 0
  return bWhen - aWhen
}

export const compareByName = (a: any, b: any): number => {
  return a.command.localeCompare(b.command)
}
