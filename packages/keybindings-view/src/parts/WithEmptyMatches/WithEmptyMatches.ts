const withEmptyMatch = (keyBinding: any): any => {
  return {
    ...keyBinding,
    commandMatches: [],
    keyMatches: [],
  }
}

export const withEmptyMatches = (keyBindings: any): readonly any[] => {
  return keyBindings.map(withEmptyMatch)
}
