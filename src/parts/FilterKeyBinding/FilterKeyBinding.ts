import * as FuzzySearch from '@lvce-editor/fuzzy-search'

export const filterKeyBinding = (pattern: string, word: string): readonly number[] => {
  const matches = FuzzySearch.fuzzySearch(pattern, word)
  return matches
}
