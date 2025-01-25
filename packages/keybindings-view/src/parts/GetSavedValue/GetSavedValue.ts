export const getSavedValue = (savedState: unknown): string => {
  if (savedState && typeof savedState === 'object' && 'value' in savedState && typeof savedState.value === 'string') {
    return savedState.value
  }
  return ''
}
